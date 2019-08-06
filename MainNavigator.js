import React from 'react';
import WelcomeScreen from './src/components/WelcomeScreen';
import LoginFormScreen from './src/components/LoginFormScreeen';
import AfterWelcomeScreen from './src/components/AfterWelcomScreen'
import ConfirmCodeScreen from './src/components/ConfirmCodeScreen';
import HomeScreenNavigator from './src/navigations/HomeScreenNavigator';
import {createAppContainer,createStackNavigator} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    AfterWelcomeScreen,
    LoginFormScreen,
    ConfirmCodeScreen,
    HomeScreenNavigator: HomeScreenNavigator
  },
  {
    initialRouteName: "HomeScreenNavigator",
    defaultNavigationOptions: {
      header: null
    },
  }
  
);

export default createAppContainer(AppNavigator)
