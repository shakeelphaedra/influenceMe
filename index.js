import {AppRegistry, Alert, RNRestart} from 'react-native';
import App from './App';
import {setJSExceptionHandler, getJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';
import {name as appName} from './app.json';
  
AppRegistry.registerComponent(appName, () => App);
