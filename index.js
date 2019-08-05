/**
 * @format
 */

import {AppRegistry, Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setJSExceptionHandler, getJSExceptionHandler} from 'react-native-exception-handler';
// setJSExceptionHandler((error, isFatal) => {
//   // This is your custom global error handler
//   // You do stuff like show an error dialog
//   // or hit google analytics to track crashes
//   // or hit a custom api to inform the dev team.
// });
// //=================================================
// // ADVANCED use case:
// const exceptionhandler = (e, isFatal) => {
//     if (isFatal) {
//         Alert.alert(
//             'Unexpected error occurred',
//             `
//             Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
    
//             We will need to restart the app.
//             `,
//           [{
//             text: 'Restart',
//             onPress: () => {
//             }
//           }]
//         );
//       } else {
//         console.log(e); 
//       }  
// };
// setJSExceptionHandler(exceptionhandler, true);
const currentHandler = getJSExceptionHandler();
AppRegistry.registerComponent(appName, () => App);
