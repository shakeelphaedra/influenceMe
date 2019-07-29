import React from 'react';
import WelcomeScreen from '../src/components/WelcomeScreen';
import LoginFormScreen from '../src/components/LoginFormScreeen';
import AfterWelcomeScreen from '../src/components/AfterWelcomScreen'
import ConfirmCodeScreen from '../src/components/ConfirmCodeScreen';

import {createAppContainer,createStackNavigator} from 'react-navigation';
const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    AfterWelcomeScreen,
    LoginFormScreen,
    ConfirmCodeScreen
  },
  {
    initialRouteName: "WelcomeScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F9F9F9',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    
  }
  
);

export default createAppContainer(AppNavigator)
