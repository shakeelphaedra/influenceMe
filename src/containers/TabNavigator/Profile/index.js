import React, { Component } from 'react';
import ProfileScreen from '../../../components/AfterLoginScreen/ProfileScreen';

class Profile extends Component {
  handleSettingsClick = () => {
    const { navigation: { navigate } } = this.props;
    navigate('SettingsScreen');
  }
  render() {
    return <ProfileScreen settingsClick={this.handleSettingsClick}  navigation={this.props.navigation}/>
  }
}

export default Profile;