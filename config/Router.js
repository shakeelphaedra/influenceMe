import React from 'react';
import WelcomeScreen from '../src/components/WelcomeScreen';
import LoginForm from '../src/components/LoginForm';

import {createAppContainer,createStackNavigator} from 'react-navigation';
const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    LoginForm,
  },
  {
    initialRouteName: "WelcomeScreen"
  }
);

export default createAppContainer(AppNavigator)
