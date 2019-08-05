import React from 'react';
import WelcomeScreen from '../src/components/WelcomeScreen';
import LoginFormScreen from '../src/components/LoginFormScreeen';
import AfterWelcomeScreen from '../src/components/AfterWelcomScreen'
import ConfirmCodeScreen from '../src/components/ConfirmCodeScreen';
import HomeScreenNavigator from './HomeScreenNavigator';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import {Image, TouchableHighlight} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

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
    }

  }
  
);

export default createAppContainer(AppNavigator)
