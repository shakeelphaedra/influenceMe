import React,{Component} from 'react';
import {View, StatusBar, Text, SafeAreaView,} from 'react-native';
import Router from './config/Router';
// import firebase from 'react-native-firebase';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers  from './src/reducers';
import {Provider} from 'react-redux';

class App extends Component {
  //   componentWillMount(){
  //     firebase.auth()
  // .signInAnonymously()
  // .then(credential => {
  //   if (credential) {
  //     console.log('default app user ->', credential.user.toJSON());
  //   }
  // });
  //   }
    render(){
      const store= createStore(reducers,{}, applyMiddleware(ReduxThunk))
      return (
        <Provider store={store}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <Router/>
          </SafeAreaView>
        </Provider>
      );
    }
    
};

export default App;
