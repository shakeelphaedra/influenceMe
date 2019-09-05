import React , {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import { NAMED_COLORS } from '../../common/AppColors';
import { fonts, BG_COLOR } from '../../styles';

class GreyHeaderWithBackButton extends Component{
  render () {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.touchableOpacityStyle}>
          <Icon name='uniF1F9' color='white' size={28} />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', color: NAMED_COLORS.white, fontFamily: fonts.esp_light, fontSize: 12 }}>{this.props.text}</Text>
        <TouchableOpacity onPress={() => { }} style={styles.touchableOpacityStyle}>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAMED_COLORS.grey,
  },
  backgroundImageContainerStyle: {
      backgroundColor: '#A4A4A4',
      color: '#A7A7A7'
  },
  boxShadow: {
      backgroundColor:'rgba(0,0,0,0.2)',
      width: '100%',
      flex: 1,
      alignSelf: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 3,
      shadowOpacity: 1,
  },
  titleStyle: { 
      zIndex: 2,
      fontSize: 14,
      marginBottom: 10,
      textShadowOffset: {width: 0, height: 0},
      textShadowRadius: 0,
      color: 'white',
      opacity: 0.8
  },
  descriptionStyle: {
      zIndex: 2,
      fontSize: 20,
      textShadowOffset: {width: 0, height: 0},
      textShadowRadius: 0,
      marginBottom: 20,

      color: 'white',
      opacity: 0.8
  },
  header: {
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingLeft:15,
      height: 40,
      backgroundColor: BG_COLOR,
      paddingRight: 15,
      alignItems: 'center'
  },
  headerBottom: {
      flex:0.18, 
  },
  touchableOpacityStyle:{
      height:30,
      width:30, 
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.esp_light
  },
  activeTitle: {
    color: 'red',
  },
});


export {GreyHeaderWithBackButton};