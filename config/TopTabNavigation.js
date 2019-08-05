import {createMaterialTopTabNavigator} from 'react-navigation';
import PlanesScreen  from '../src/components/HomeScreen/PlanesScreen'
import InfluencersScreen  from '../src/components/HomeScreen/InfluencersScreen'

const HomeScreenTopNavigator = createMaterialTopTabNavigator(
    {
        InfluencersScreen:{
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
        activeTintColor:'#844D38',
        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'#4C4C4C',
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

export default  HomeScreenTopNavigator;