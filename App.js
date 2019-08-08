import React,{Component} from 'react';
import {SafeAreaView} from 'react-native';
import MainNavigator from './MainNavigator';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers  from './src/reducers';
import {Provider} from 'react-redux';

class App extends Component {
    render(){
      const store= createStore(reducers,{}, applyMiddleware(ReduxThunk))
      return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1A'}}>
              <MainNavigator/>
            </SafeAreaView>
        </Provider>
      );
    }
};

export default App;
