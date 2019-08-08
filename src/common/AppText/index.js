import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {NAMED_COLORS} from '../../common/AppColors';

export default class AppText extends Component {
    render(){
        return(
            <Text style={[styles.fontssStyle, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
};
const styles = StyleSheet.create({
    fontssStyle: {
      color: NAMED_COLORS.white,
      fontSize: 19
    },
  });