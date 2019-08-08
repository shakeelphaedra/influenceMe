import React, {Component} from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import {FONT_FAMILY} from '../../styles';

class BackButton extends Component {

    render () {
        const {onPress} = this.props
        return (
            <View style={{ height: 70,position: 'absolute', top: 0,width: '100%', shadowColor: '#000', shadowOffset: {
                height: 1,width: 0
            },
            zIndex: 99999,
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3 }}>
                <View style={{ flex: 1,
                        flexDirection:'row', justifyContent:'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={{alignSelf: 'flex-start', marginTop: 10, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Image source={require('../../assets/icons/white-back.png')} style={{height: 60, width: 60, alignSelf: 'center' }}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

export  {BackButton}