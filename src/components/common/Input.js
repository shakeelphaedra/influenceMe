import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { fonts } from '../../styles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, inputStyle, onPress }) => {
  return (
    <View style={styles.containerStyle}>

      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[styles.inputStyle, inputStyle]}
        onPress={onPress}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontfamily: fonts.esp_extraLight,
    fontSize: 14,
    height: '100%',
    width: '100%'
  },
  containerStyle: {
    borderRadius: 50,
    height: 55,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#e0e3e5',
    borderWidth: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  }
}
export { Input }
