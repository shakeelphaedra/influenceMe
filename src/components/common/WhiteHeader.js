import React, {Component} from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import {FONT_FAMILY, fonts} from '../../styles';

class WhiteHeader extends Component {

    render () {
        const {onPress} = this.props
        return (
            // <View style={{ height: 80, flex:1 }} >
            <View style={{ height: 70,width: '100%', 
            shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc'
            }}>
                <View style={{ flex: 1,backgroundColor:'#EFF0F1', borderBottomColor: 'grey',borderBottomWidth: 0.1,
                        flexDirection:'row', justifyContent:'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={onPress} style={{flex:1}}>
                        <View style={{ flex:1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/icons/black-back.png')} style={{height: 60, width: 60, alignSelf: 'center' }}/>
                            <Text style={{fontSize: 20,fontFamily: fonts.esp_extraLightItalic, marginLeft: -12}}>Atras</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex:1, }}>
                        <Image source={require('../../assets/www/dist/img/Icono-negro.png')} 
                        style={{height: 40, width: 40, alignSelf: 'center' }}/>
                    </View>
                    <View style={{ flex:1, width:30, }}></View>
                </View>
            </View>
            // </View>
        )
    }
}

export  {WhiteHeader}