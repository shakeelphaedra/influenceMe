import React from 'react';
import EnteranceScreen  from '../src/components/HomeScreen/EnteranceScreen'
import ProfileScreen  from '../src/components/HomeScreen/ProfileScreen'
import ProgressScreen  from '../src/components/HomeScreen/ProgressScreen'
import { createBottomTabNavigator} from 'react-navigation';
import {Image, TouchableHighlight} from 'react-native';
import  HomeScreenTopNavigator from './TopTabNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faRedo, faSignOutAlt,faUser, faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const HomeScreenRouter = createBottomTabNavigator(
  {
    Explore: {
      screen: EnteranceScreen, 
      navigationOptions: {
        tabBarLabel:"Explorer",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faGlobe}  color={tintColor} />
        )
      }
    },
    ProgressScreen: {
      screen: ProgressScreen,
      navigationOptions: {
        tabBarLabel: "Progreso",
        tabBarIcon: ({ tintColor }) => (

          <FontAwesomeIcon icon={faRedo}  color={tintColor} />

        ), 
        
      }
    },
    EnteranceScreen: {
      screen:  EnteranceScreen,
      navigationOptions: {
        tabBarLabel: "Entrenar",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faSignOutAlt}  color={tintColor} />
        )
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faUser}  color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Explore",
    tabBarOptions: 
      {
        activeTintColor:'#844D38',
        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'#4C4C4C',
        },
        indicatorStyle: {
            backgroundColor: 'red',
        },
        labelStyle: {
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0
        },
        tabStyle: {
          paddingLeft: 0,
          paddingRight: 0
        },
      },
    swipeEnabled: true,
    animationEnabled: true,
  }
);

export default (HomeScreenRouter)
