import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Spinner } from './common';
import firebase from 'react-native-firebase';
class AppLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userId');
    const currentUser = firebase.auth().currentUser;
    this.props.navigation.navigate((userToken && currentUser) ? 'AfterLoginNavigator' : 'BeforeLoginNavigation');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner size={"large"} />
      </View>
    )
  }
}
export default AppLoading