import React from 'react';
import {View, StatusBar, Text, SafeAreaView} from 'react-native';
import Router from './config/Router';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers  from './src/reducers';
import {Provider} from 'react-redux';

const App = () => {
    const store= createStore(reducers,{}, applyMiddleware(ReduxThunk))
    return (
      <Provider  store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          {/* <StatusBar barStyle="dark-content" /> */}
          <Router/>
          {/* <Text>jhkhhjhhkh</Text> */}
        </SafeAreaView>
      </Provider>
  );
};

export default App;
