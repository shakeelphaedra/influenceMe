import React, { Component } from 'react';
import { View } from 'react-native';
import FAQScreen from '../../components/AfterLoginScreen/FAQScreen';

class FAQ extends Component {
  handleSettingsClick = () => {
    const { navigation: { navigate } } = this.props;
    navigate('SettingsScreen');
  }
  render() {
    return <FAQScreen navigation={this.props.navigation} />
  }
}

export default FAQ;