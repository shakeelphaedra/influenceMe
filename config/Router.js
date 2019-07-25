import React from 'react';
import HomeScreen from '../src/components/Home';

import {createAppContainer,createStackNavigator} from 'react-navigation';
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator)
  