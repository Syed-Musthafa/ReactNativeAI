import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Feature = () => {
  return (
    <View style={{height: hp(60), padding: 10}}>
      <Text style={{fontSize: wp(7), fontWeight: '700', color: '#B9B4C7'}}>
        Feature
      </Text>
      <View
        style={{
          backgroundColor: '#85E6C5',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: wp(10), height: wp(10)}}
            source={require('../assets/images/chatgptIcon.png')}
          />
          <Text style={{marginLeft: 5, fontSize: wp(5), fontWeight: '700'}}>
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8), marginTop: 5}}>
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#DFCCFB',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: wp(10), height: wp(10)}}
            source={require('../assets/images/dalleIcon.png')}
          />
          <Text style={{marginLeft: 5, fontSize: wp(5), fontWeight: '700'}}>
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8), marginTop: 5}}>
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#C8FFE0',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: wp(10), height: wp(10)}}
            source={require('../assets/images/smartaiIcon.png')}
          />
          <Text style={{marginLeft: 5, fontSize: wp(5), fontWeight: '700'}}>
            Smart AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8), marginTop: 5}}>
          A powerful voice assistant with the abilities of ChatGPT and Dall-E,
          providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({});
