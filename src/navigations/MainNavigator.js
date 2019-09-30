import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import LoginFormScreen from '../components/LoginFormScreeen';
import AfterWelcomeScreen from '../components/AfterWelcomScreen'
import ConfirmCodeScreen from '../components/ConfirmCodeScreen';
import AppLoading from '../components/AppLoading';
import AfterLoginNavigator from './AfterLoginNavigator';
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import SettingsScreen from '../containers/TabNavigator/Profile/settings';
import UpdateWeight from '../containers/TabNavigator/Profile/UpdateWeight';
import Search from '../containers/TabNavigator/Profile/Search';
import UpdateHeight from '../containers/TabNavigator/Profile/UpdateHeight';
import UpdateEmail from '../containers/TabNavigator/Profile/UpdateEmail';
import CancelSubscription from '../containers/TabNavigator/Profile/CancelSubscription';
import DayExercise  from '../containers/Days/Exercise';
import FAQ  from '../containers/FAQ/index';
import Subscription1  from '../containers/FAQ/Subscription1';
import Subscription  from '../containers/FAQ/Subscription';


const AfterLoginNavigation = createStackNavigator(
  {
    AfterLoginNavigator: AfterLoginNavigator,
    SettingsScreen: SettingsScreen,
    UpdateEmailScreen: UpdateEmail,
    UpdateWeightScreen: UpdateWeight,
    UpdateHeightScreen: UpdateHeight,
    DayExercise,
    CancelSubscription,
    Search,
    FAQ,
    Subscription: Subscription1,
    SubscriptionScreen:  Subscription
  },
  {
    initialRouteName: "AfterLoginNavigator",
    defaultNavigationOptions: {
      header: null
    },
  }
  
);

const BeforeLoginNavigation = createStackNavigator(
  {
    WelcomeScreen,
    AfterWelcomeScreen,
    LoginFormScreen,
    ConfirmCodeScreen,
  },
  {
    initialRouteName: "WelcomeScreen",
    defaultNavigationOptions: {
      header: null
    },
  }
  
);

export default createAppContainer(
  createSwitchNavigator(
    { 
      AppLoading,
      BeforeLoginNavigation,
      AfterLoginNavigation,
    },
    {
      initialRouteName: 'AppLoading'
    }
  )
)
