import React,{Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './src/navigations/MainNavigator';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers  from './src/reducers';
import {Provider} from 'react-redux';

import FlashMessage from "react-native-flash-message";
import { fonts } from './src/styles';
class App extends Component {
    render(){
      const store= createStore(reducers,{}, applyMiddleware(ReduxThunk))
      return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1A'}}>
              <MainNavigator/>
              <FlashMessage position="bottom" titleStyle={{fontSize: 17, fontFamily: fonts.esp_light, paddingTop: 7, marginLeft: -12}} textStyle={{margin: 0, padding: 0}}/>
            </SafeAreaView>
        </Provider>
      );
    }
};

export default App;
