import React, {Component} from 'react';
import {View, Text,Image, TouchableHighlight} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

class WhiteHeader extends Component {
    render () {
        return (
            <View style={{ height: 70,position: 'absolute', top: 0,width: '100%', shadowColor: '#000', shadowOffset: {
                height: 1,width: 0
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3 }}>
                <View style={{ flex: 1,backgroundColor:'#EFF0F1', borderBottomColor: 'grey',borderBottomWidth: 0.1,
                        flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <Image source={require('../../assets/www/dist/img/Icono-negro.png')} style={{height: 50, width: 50 }}/>
                </View>
            </View>
        )
    }
}

export  {WhiteHeader}