import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Voice from '@react-native-community/voice';

import Feature from '../components/Feature';
import {dummyMessages} from '../constants';

const HomeScreen = () => {
  const [message, setMessage] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const speechStartHandler = e => {
    console.log('speech start handler');
  };

  const speechEndHandler = e => {
    setRecording(false);
    console.log('speech End handler');
  };

  const speechResultsHandler = e => {
    console.log('speech result handler', e);
  };

  const speechErrorHandler = e => {
    console.log('speech error handler', e);
  };

  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const handleClear = useCallback(() => {
    setMessage([]);
  }, [message]);

  const handleStop = useCallback(() => {
    setSpeaking(false);
  }, [speaking]);

  return (
    <View style={styles.homeContainer}>
      <SafeAreaView>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Image
            style={styles.imageLogo}
            source={require('../assets/images/welcome.png')}
          />
        </View>

        {/* feature || message */}
        {message.length > 0 ? (
          <View style={{padding: 20}}>
            <Text style={{fontSize: wp(5), fontWeight: '700'}}>Assistant</Text>
            <View style={{height: hp(58), backgroundColor: '#EBF0F6'}}>
              <ScrollView
                bounces={false}
                style={{padding: 15}}
                showsVerticalScrollIndicator={false}>
                {message.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      // its an ai image
                      return (
                        <View
                          key={index}
                          style={{flex: 1, alignItems: 'flex-start'}}>
                          <View
                            style={{
                              width: wp(70),
                              backgroundColor: '#D0E9EA',
                              borderBottomEndRadius: 10,
                              borderBottomStartRadius: 10,
                              borderTopEndRadius: 10,
                              marginTop: 8,
                              padding: 7,
                            }}>
                            <Image
                              source={{uri: message.content}}
                              resizeMode="contain"
                              style={{
                                width: wp(60),
                                height: wp(60),
                              }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      //text response
                      return (
                        <View
                          style={{
                            width: wp(70),
                            backgroundColor: '#D0E9EA',
                            borderBottomEndRadius: 10,
                            borderBottomStartRadius: 10,
                            borderTopEndRadius: 10,
                            marginTop: 8,
                            padding: 7,
                          }}>
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View
                        key={index}
                        style={{flex: 1, alignItems: 'flex-end'}}>
                        <View
                          style={{
                            width: wp(70),
                            backgroundColor: '#ffffff',
                            borderBottomEndRadius: 10,
                            borderBottomStartRadius: 10,
                            borderTopStartRadius: 10,
                            marginTop: 8,
                            padding: 7,
                          }}>
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Feature />
        )}
        {/* recoreding clear and stop button */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {recording ? (
            <TouchableOpacity>
              <Image
                style={{width: hp(10), height: hp(10)}}
                source={require('../assets/images/voiceLoading.gif')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                style={{width: hp(10), height: hp(10)}}
                source={require('../assets/images/recordingIcon.png')}
              />
            </TouchableOpacity>
          )}

          {message.length > 0 && (
            <TouchableOpacity
              onPress={handleClear}
              style={{
                position: 'absolute',
                right: 50,
                padding: 10,
                justifyContent: 'center',
                backgroundColor: '#dddd',
                borderRadius: 10,
              }}>
              <Text>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity
              onPress={handleStop}
              style={{
                position: 'absolute',
                left: 50,
                padding: 10,
                justifyContent: 'center',
                backgroundColor: '#FFB7B7',
                borderRadius: 10,
              }}>
              <Text>stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageLogo: {
    width: wp(25),
    height: wp(25),
  },
});
