import React, {Component} from 'react';
import {View,TouchableHighlight} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
class ProgressScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
              height: 5,
              backgroundColor: '#4C4C4C',
              borderBottomColor: '#4C4C4C'
            },
            headerLeft: (
              <TouchableHighlight
                onPress={() => {}}
                underlayColor={'#444444'}
                style={{marginLeft: 10,marginBottom: 60 }}
                >
                <FontAwesomeIcon icon={faSearch}  color='white' height='30' style={{height: 30, width: 30}} />
              </TouchableHighlight>
            ),
            headerRight: (
              <TouchableHighlight
              onPress={() => {}}
              underlayColor={'#444444'}
              style={{marginLeft: 10,marginBottom: 60 }}
              >
              <FontAwesomeIcon icon={faQuestionCircle}  color='white' height='30' style={{height: 40, width: 40}} />
      
            </TouchableHighlight>
            ),
            header: false,
      
          }
    }
    
    render () {
        return (
          <View></View>
        )
    }
}

export default ProgressScreen