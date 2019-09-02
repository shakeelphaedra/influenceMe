import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigationFocus, NavigationActions } from 'react-navigation';
import InfluencersScreen from './InfluencersScreen';
import { GreyHeader, Spinner } from '../common';

class EnteranceScreen extends Component {
  redirect() {
      this.props.navigation.dispatch(
        NavigationActions.navigate({
          routeName: 'AfterLoginNavigator',
          action: NavigationActions.navigate({ routeName: 'ExplorerScreen' }),
        })
      )
  }
  shouldComponentUpdate() {
    return true
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner size={"large"} />
        {this.redirect()}
      </View>
    )
  }
}
export default withNavigationFocus(EnteranceScreen)