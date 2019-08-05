import React, {Component} from 'react';
import {View, Text,Image, TouchableHighlight} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

class WhiteHeader extends Component {
    render () {
        return (
            <View style={{  height: 60,position: 'absolute', top: 0,width: '100%', backgroundColor: '#F6F8FA' }}>
                <View style={{ flex: 1,backgroundColor:'#F6F8FA', borderBottomColor: 'grey',borderBottomWidth: 0.1,
                        flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <Image source={require('../../assets/www/dist/img/Icono-negro.png')} style={{height: 30, width: 30 }}/>
                </View>
            </View>
        )
    }
}

export  {WhiteHeader}