import React from 'react';
import EnteranceScreen  from '../components/HomeScreen/EnteranceScreen'
import ExplorerScreen  from '../components/HomeScreen/ExplorerScreen';
import ProfileScreen  from '../components/HomeScreen/ProfileScreen';
import ProgressScreen  from '../components/HomeScreen/ProgressScreen';
import InfluencerDetails  from '../components/HomeScreen/Influencers/Details';
import PlanDetails  from '../components/HomeScreen/Plans/Details';
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faRedo, faSignOutAlt,faUser, faSearch, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ExplorerStack = createStackNavigator(
  {
    ExplorerScreen: ExplorerScreen,
    InfluencerDetails: InfluencerDetails,
    PlanDetails: PlanDetails
  },
  {
    initialRouteName: "PlanDetails",
    defaultNavigationOptions: {
      header: null
    }

  }
  
);

const HomeScreenRouter = createBottomTabNavigator(
  {
    Explore: {
      screen: ExplorerStack, 
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
        )
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
