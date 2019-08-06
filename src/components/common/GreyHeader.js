import React, {Component, Fragment} from 'react';
import {View, Text,Image, TouchableHighlight} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

class GreyHeader extends Component {
    
    _showSearchBar() {
        navigationOptions = ({ navigation }) => {
                return {
                tabBarVisible: false
              };
        };
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <View style={{ flex: 1, backgroundColor:'#4C4C4C', flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
                    <TouchableHighlight
                        onPress={this._showSearchBar.bind(this)}
                        underlayColor={'#444444'}
                        style={{marginLeft: 10,}}
                        >
                        <FontAwesomeIcon icon={faSearch}  color='white' size={30}  />
                    </TouchableHighlight>
                    <Image source={require('../../assets/www/dist/img/Icono-blanco.png')} style={{height: 30, width: 30 }}/>
                    <TouchableHighlight
                        onPress={() => {}}
                        underlayColor={'#444444'}
                        style={{marginLeft: 10}}
                        >
                        <FontAwesomeIcon icon={faQuestionCircle}  color='white' size={30}  />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export  {GreyHeader}