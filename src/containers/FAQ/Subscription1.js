import React, { Component } from 'react';
import { View } from 'react-native';
import SubscriptionScreen from '../../components/AfterLoginScreen/SubscriptionScreen1';

class Subscription extends Component {
  handleSettingsClick = () => {
    const { navigation: { navigate } } = this.props;
    navigate('SettingsScreen');
  }
  render() {
    return <SubscriptionScreen navigation={this.props.navigation} />
  }
}

export default Subscription;