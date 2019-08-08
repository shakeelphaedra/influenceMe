import React, {Component} from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import {FONT_FAMILY} from '../../styles';

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
                        flexDirection:'row', justifyContent:'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <View style={{alignSelf: 'flex-start', marginTop: 10, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Image source={require('../../assets/icons/black-back.png')} style={{height: 60, width: 60, alignSelf: 'center' }}/>
                            <Text style={{fontFamily: FONT_FAMILY, fontSize: 24,fontStyle: 'italic', fontWeight: '300' ,marginTop: 22, marginLeft: -12}}>Atras</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={require('../../assets/www/dist/img/Icono-negro.png')} style={{height: 50, width: 50,marginLeft: '18%', alignSelf: 'center' }}/>
                </View>
            </View>
        )
    }
}

export  {WhiteHeader}