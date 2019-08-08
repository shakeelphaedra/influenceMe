import React from 'react';
import WelcomeScreen from './src/components/WelcomeScreen';
import LoginFormScreen from './src/components/LoginFormScreeen';
import AfterWelcomeScreen from './src/components/AfterWelcomScreen'
import ConfirmCodeScreen from './src/components/ConfirmCodeScreen';
import HomeScreenNavigator from './src/navigations/HomeScreenNavigator';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import SettingsScreen from './src/containers/TabNavigator/Profile/settings';
import UpdateEmail from './src/containers/TabNavigator/Profile/UpdateEmail';

const AppNavigator = createStackNavigator(
  {
    WelcomeScreen,
    AfterWelcomeScreen,
    LoginFormScreen,
    ConfirmCodeScreen,
    HomeScreenNavigator: HomeScreenNavigator,
    SettingsScreen: SettingsScreen,
    UpdateEmailScreen: UpdateEmail,
  },
  {
    initialRouteName: "HomeScreenNavigator",
    defaultNavigationOptions: {
      header: null
    },
  }
  
);

export default createAppContainer(AppNavigator)
