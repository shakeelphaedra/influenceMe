import React, { Component } from 'react';
import {Image, View, Text} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
 
class SelectTag extends Component {
  
  render() {
    const {value, label, options, onChangeText, overlayStyle} = this.props;
    return (
      <Dropdown
        label={label}
        value={value}
        onChangeText={onChangeText}
        containerStyle={overlayStyle}
        baseColor='black'

        data={options}
        containerStyle={{width: '40%'}}
      />
    );
  }
}
export {SelectTag}