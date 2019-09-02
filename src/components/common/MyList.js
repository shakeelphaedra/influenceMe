import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from './Icon';
import { commonStyle, fonts } from '../../styles';

class MyList extends  Component {
  render (){
    const {icon, text} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon name={icon} size={20} color="black"/>
        <Text style={[ {marginLeft: 4, fontFamily: fonts.esp, fontSize: 24, opacity: 0.5}]}>{text}</Text>
      </View>
    )
  }
}

export {MyList}