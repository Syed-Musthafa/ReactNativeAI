import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <SafeAreaView style={styles.welcomeContainer}>
      <View>
        <Text style={styles.title}>Jarvis</Text>
        <Text style={{fontSize: wp(4)}}>The Future is here, Powered by AI</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Image
          style={styles.imageLogo}
          source={require('../assets/images/welcome.png')}
        />
      </View>
      <TouchableOpacity onPress={handleNavigate} style={styles.bottonContainer}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: wp(15),
    textAlign: 'center',
    fontWeight: '700',
    color: 'gray',
    marginTop: 30,
  },
  bottonContainer: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#85E6C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: wp(6),
    fontWeight: '700',
    color: '#333333',
  },
  imageLogo: {
    width: wp(75),
    height: wp(75),
  },
});
