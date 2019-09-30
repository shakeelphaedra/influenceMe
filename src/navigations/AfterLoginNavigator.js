import React from 'react';
import EnteranceScreen  from '../components/AfterLoginScreen/EnteranceScreen'
import ExplorerScreen  from '../components/AfterLoginScreen/ExplorerScreen';
// import ProfileScreen  from '../components/HomeScreen/ProfileScreen';
import ProfileScreen  from '../containers/TabNavigator/Profile';
import ProgressScreen  from '../components/AfterLoginScreen/ProgressScreen';
import InfluencerDetails  from '../components/AfterLoginScreen/Influencers/Details';
import PlanDetails  from '../containers/Plans/Details';
import DayDetails  from '../containers/Days/Details';
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { NavigationActions, StackActions } from 'react-navigation';

import Icon from '../components/common/Icon';
import { fonts } from '../styles';
import { NAMED_COLORS } from '../common/AppColors';

const ExplorerStack = createStackNavigator(
  {
    ExplorerScreen: ExplorerScreen,
    InfluencerDetails: InfluencerDetails,
    PlanDetails: PlanDetails,
    DayDetails: DayDetails,
  },
  {
    initialRouteName: "ExplorerScreen",
    defaultNavigationOptions: {
      header: null
    }
    

  }
  
);

const AfterLoginNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExplorerStack, 
      navigationOptions: {
        tabBarLabel:"Explorer",
        tabBarIcon: ({ tintColor }) => (
          <Icon name='uniF278'  color={tintColor}  size={20}  />
        ),
        tabBarOnPress: (scene) => {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'AfterLoginNavigator' })],
          });
          scene.navigation.dispatch(resetAction);
        },
      }
    },
    ProgressScreen: {
      screen: ProgressScreen,
      navigationOptions: {
        tabBarLabel: "Progreso",
        tabBarIcon: ({ tintColor }) => (
          <Icon name='uniF201'  color={tintColor}  size={20}  />
        )
      }
    },
    EnteranceScreen: {
      screen:  EnteranceScreen,
      navigationOptions: {
        tabBarLabel: "Entrenar",
        tabBarIcon: ({ tintColor }) => (
          <Icon name='uniF1B3'  color={tintColor}  size={20}  />
        )
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon name='uniF25E'  color={tintColor}  size={20}  />
        )
      }
    }
  },
  {
    initialRouteName: "Explore",
    tabBarOptions: 
      {
        activeTintColor: NAMED_COLORS.orangeColor,
        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'#4C4C4C',
            alignItems: 'center',
            alignSelf: 'center',
            paddingLeft: 60,
            paddingBottom: 10,
            height: 60,
            paddingRight: 60,
        },
        containerStyle: {
          backgroundColor: 'yellow'
        },
        indicatorStyle: {
            backgroundColor: 'red',
        },
        labelStyle: {
          margin: 0,
          fontSize: 9,
          padding: 0,
          fontFamily: fonts.esp_extraLight,
        },
        tabStyle: {
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0
        },
      },
    swipeEnabled: true,
    animationEnabled: true,
  }
);

export default (AfterLoginNavigator)
