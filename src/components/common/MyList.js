import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from './Icon';
import { commonStyle, fonts } from '../../styles';

class MyList extends  Component {
  render (){
    const {icon, text} = this.props;
    return (
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Icon name={icon} size={14} color="white"/>
        <Text style={[ {marginLeft: 4, fontFamily: fonts.esp, fontSize: 14,color: 'white'}]}>{text}</Text>
      </View>
    )
  }
}

export {MyList}