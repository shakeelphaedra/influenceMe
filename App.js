import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView,
  AppState
} from 'react-native';

import MainNavigator from './src/navigations/MainNavigator';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';

import FlashMessage from "react-native-flash-message";
import appsFlyer from 'react-native-appsflyer';

import { fonts } from './src/styles';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

this.onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
  (data) => {
    console.log(data);
  }
);
const options = {
  devKey: "hvXJ8HBe9HJhw8Ag28YhcY",
  isDebug: true
};

if (Platform.OS === 'ios') {
  options.appId = "123456789";
}
appsFlyer.initSdk(options,
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
)

class App extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.TrackEventPressed
  }

  componentWillUnmount() {
    this.TrackEventPressed();
    if (this.onInstallConversionDataCanceller) {
      this.onInstallConversionDataCanceller();
    }
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {

      if (Platform.OS === 'ios') {
        appsFlyer.trackAppLaunch();
      }
    }

    if (this.state.appState.match(/active|foreground/) && nextAppState === 'background') {
      if (this.onInstallConversionDataCanceller) {
        this.onInstallConversionDataCanceller();
      }
    }

    this.setState({ appState: nextAppState });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
          <MainNavigator />
          <FlashMessage position="bottom" titleStyle={{ fontSize: 17, fontFamily: fonts.esp_light, paddingTop: 7, marginLeft: -12 }} textStyle={{ margin: 0, padding: 0 }} />
        </SafeAreaView>
      </Provider>
    );
  }
};

export default App;
