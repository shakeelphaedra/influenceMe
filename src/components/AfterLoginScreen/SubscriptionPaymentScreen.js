import React, { Component } from 'react';
import { View, ImageBackground, Alert } from 'react-native';
import { GreyHeaderWithBackButton, } from '../common';
import { WebView } from "react-native-webview";
import { description, priceOfLifeTime, username } from '../../utils';
import firebase from 'react-native-firebase';
import { showMessage } from 'react-native-flash-message';

class SubscriptionPaymentScreen extends Component {

  encodedUrl = () => {
    user = firebase.auth().currentUser;
    phone = user.phoneNumber
    let url = "";

    if (phone.includes("+1") || phone.includes("+56")) {
      url = `username=${encodeURIComponent(username)}&description=${encodeURIComponent(description)}&country=CL&price=90000&currency=CLP&item_code=${user.uid}`;
    } else if (phone.includes("+57")) {
      url = `username=${encodeURIComponent(username)}&description=${encodeURIComponent(description)}&country=CO&price=368900&currency=COP&item_code=${user.uid}`;
    } else if (phone.includes("+34")) {
      url = `username=${encodeURIComponent(username)}&description=${encodeURIComponent(description)}&country=ES&price=726&currency=EUR&item_code=${user.uid}`;
    } else {
      showMessage({
        message: "OneBip DCB no es compatible en su país.",
        type: 'warning'
      })
      this.props.navigation.goBack();
    }
    return url;
  }

  parseUrl = (url) => {
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    return params
  }

  _onNavigationStateChange = (webviewState) => {
    if (webviewState.title === "InfluenceMe") {
      params = this.parseUrl(webviewState.url)
      var message = params.why ? "Hubo algún problema con su solicitud de pago. Inténtalo de nuevo." : "Suscrito exitosamente!"
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
          <View style={{ flex: 13, overflow: "hidden" }}>
            <WebView
              ref="webview"
              source={{
                uri: `https://pay.onebip.com/purchases?${this.encodedUrl()}`
              }}
              useWebkit={true}
              onNavigationStateChange={this._onNavigationStateChange}
              renderError={() => {
                Alert.alert(
                  'Error',
                  'Erro al cargar la página, verifique su conexión a internet',
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