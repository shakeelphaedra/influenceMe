import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import PlanSearchScreen from '../components/AfterLoginScreen/PlanSearchScreen';
import InfluencerSearchScreen from '../components/AfterLoginScreen/InfluencerSearchScreen'
import { fonts } from '../styles';
import { NAMED_COLORS } from '../common/AppColors';

const TopSearch = createMaterialTopTabNavigator(
  {
    InfluencerSearchScreen: {
      screen: props => <InfluencerSearchScreen {...props} />,
      navigationOptions: {
        tabBarLabel: "Influencers",
      }

    },
    PlanSearchScreen: {
      screen: props => <PlanSearchScreen {...props} />,
      navigationOptions: {
        tabBarLabel: "Planes",
      }
    }
  },
  {
    initialRouteName: "InfluencerSearchScreen",
    tabBarOptions:
    {

      activeTintColor: NAMED_COLORS.orangeColor,
      upperCaseLabel: false,
      pressOpacity: 1,
      inactiveTintColor: '#D3D3D3',
      labelStyle: {
        fontSize: 17,
        fontFamily: fonts.esp
      },
      tabStyle: {
        padding: 0
      },
      style: {
        backgroundColor: '#4C4C4C',
        borderTopWidth: 0,
      },
      indicatorStyle: {
        backgroundColor: 'red',
      }

    },

    tabBarPosition: 'top',
    swipeEnabled: true,
  }
);

const TopSearchNavigation = createStackNavigator({
  TopSearch,
}, {
    initialRouteName: 'TopSearch',
    defaultNavigationOptions: {
      header: null
    }
  })
export default TopSearchNavigation;