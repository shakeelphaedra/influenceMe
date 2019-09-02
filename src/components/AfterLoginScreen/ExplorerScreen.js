import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InfluencersScreen from './InfluencersScreen';
import PlansScreen from './PlansScreen';
import { GreyHeader } from '../common';
import { BG_COLOR } from '../../styles';
import TopExplorerNavigation from '../../navigations/TopExplorerNavigation';
class ExplorerScreen extends Component {
  state = {
    activeTab: 1,
  }

  defaultNavigationOptions = {
    header: null
  }
  header = null
  static router = {
    ...TopExplorerNavigation.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return TopExplorerNavigation.router.getStateForAction(action, lastState);
    },
  };
  componentDidUpdate(lastProps) {
    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state
  }

  _renderContent() {
    return <TopExplorerNavigation navigation={this.props.navigation} />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 55 }}>
          <GreyHeader navigation={this.props.navigation} />
        </View>
        {/* <View style={{height: 25, backgroundColor: BG_COLOR}}>
                   <View style={{flexDirection: 'row', flex: 1}}>
                        <TouchableOpacity onPress={() => {this.setState({activeTab: 1})}} 
                        style={[styles.tabContainerStyle,this.state.activeTab == 1 ? styles.activeTabStyle : {height: 100}]} >
                            <Text
                                style={[styles.textStyle, this.state.activeTab == 1 ? styles.activeTabTextStyle : {}]}>
                                INFLUENCERS
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.setState({activeTab: 2})}} 
                         style={[styles.tabContainerStyle,this.state.activeTab == 2 ? styles.activeTabStyle : {}]}>
                         <Text
                             style={[styles.textStyle, this.state.activeTab == 2 ? styles.activeTabTextStyle : {}]}>
                             PLANES
                         </Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
        <View style={{ flex: 1 }}>
          {this._renderContent()}
        </View>
      </View>
    )
  }
}


const styles = {
  backgroundImageContainerStyle: {
    backgroundColor: 'red',
    color: '#A7A7A7'
  },
  titleStyle: {
    zIndex: 2,
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    opacity: 0.8
  },
  descriptionStyle: {
    zIndex: 2,
    fontSize: 20,
    color: 'white',
    opacity: 0.8
  },
  boxShadow: {
    position: 'absolute',
    top: 0,
    height: 10,
    width: '100%',
    marginTop: -10,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    position: 'relative', marginLeft: 15, marginBottom: 20, alignItems: 'flex-end', flexDirection: 'row', flex: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: "400",
    fontSize: 14
  },
  tabContainerStyle: {
    width: '50%',
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: '#4C4C4C',
    alignItems: 'center'
  },
  activeTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  activeTabTextStyle: {
    color: 'red'
  }

}
export default ExplorerScreen