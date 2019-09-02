import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import PlanesScreen from '../components/AfterLoginScreen/PlansScreen';
import InfluencersScreen from '../components/AfterLoginScreen/InfluencersScreen'
import { fonts } from '../styles';
import { NAMED_COLORS } from '../common/AppColors';

const HomeScreenTopNavigator = createMaterialTopTabNavigator(
  {
    InfluencersScreen: {
      screen: InfluencersScreen,
      navigationOptions: {
        tabBarLabel: "Influencers",
      }

    },
    PlanesScreen: {
      screen: PlanesScreen,
      navigationOptions: {
        tabBarLabel: "Planes",
      }
    }
  },
  {
    initialRouteName: "InfluencersScreen",
    tabBarOptions:
    {
      activeTintColor: NAMED_COLORS.orangeColor,
      upperCaseLabel: false,
      pressOpacity: 1,
      inactiveTintColor: '#D3D3D3',
      labelStyle: {
        fontSize: 17,
        fontFamily: fonts.esp,
        padding: 0
      },
      tabStyle: {
        padding: 0
      },
      style: {
        backgroundColor: '#4C4C4C',
        borderTopWidth: 0,
        fontSize: 20,
        padding: 0
      },
      indicatorStyle: {
        backgroundColor: 'red',
      }

    },

    tabBarPosition: 'top',
    swipeEnabled: true,
  }
);

const TopNAvigation = createStackNavigator({
  HomeScreenTopNavigator,
}, {
    initialRouteName: 'HomeScreenTopNavigator',
    defaultNavigationOptions: {
      header: null
    }
  })
export default TopNAvigation;