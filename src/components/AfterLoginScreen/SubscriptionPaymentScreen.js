import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { GreyHeaderWithBackButton, } from '../common';
import { WebView } from "react-native-webview";
import { description, priceOfLifeTime, username } from '../../utils';
import firebase from 'react-native-firebase';

class SubscriptionPaymentScreen extends Component {

  encodedUrl = () => {
    user = firebase.auth().currentUser;
    console.log(user)
    let url = `username=${encodeURIComponent(username)}&description=${encodeURIComponent(description)}&country=DE&lang=es_CL&price=99&currency=USD&item_code=${user.uid}`;
    console.log(url)
    return url;
  }

  parseUrl = (url) => {
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    console.log(params)
    return params
  }

  _onNavigationStateChange = (webviewState) => {
    console.log("changed")
    console.log(webviewState)
    if (webviewState.title === "InfluenceMe") {
      params = this.parseUrl(webviewState.url)
      var message = params.why ? "There's was some issue with your payment request. Please try again." : "Successfully Subscribed"
      const { callBack } = this.props.navigation.state.params;
      this.props.navigation.goBack();
      callBack(message, !params.why);
    }
  }
  render() {
    return (
      <View style={{ flex: 14, backgroundColor: 'black' }}>
        <ImageBackground style={{ flex: 14 }}>
          <GreyHeaderWithBackButton text="Subscription" navigation={this.props.navigation} />
          <View style={{ flex: 13 }}>
            <WebView
              ref="webview"
              source={{
                uri: `http://pay.onebip.com/purchases?${this.encodedUrl()}`
              }}
              useWebkit={true}
              onNavigationStateChange={this._onNavigationStateChange}
              renderError={() => {
                Alert.alert(
                  'Error',
                  'Erro loading the page, please check your internet connection',
                  [
                    { text: 'OK', onPress: () => this.props.navigation.goBack() },
                  ],
                  { cancelable: true },
                );
              }}
              javaScriptEnabled={true}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default SubscriptionPaymentScreen;