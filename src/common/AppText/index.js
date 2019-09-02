import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {NAMED_COLORS} from '../../common/AppColors';
import { fonts } from '../../styles';

export default class AppText extends Component {
    render(){
        return(
            <Text numberOfLines={this.props.numberOfLines || 1} style={[styles.fontssStyle, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
};
const styles = StyleSheet.create({
    fontssStyle: {
      color: NAMED_COLORS.white,
      fontSize: 13, 
      fontFamily: fonts.esp
    },
  });