import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
