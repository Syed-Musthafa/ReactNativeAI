import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './src/navigation/stack'

const App = () => {
  return (
    <NavigationContainer>
       <RootStack />
    </NavigationContainer>
  );
};

export default App;
