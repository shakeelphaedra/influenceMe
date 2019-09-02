import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { fonts } from '../../styles';

class TextInputRoundCorner extends Component {
  handleFocus = () => this.setState({ isFocused: true })

  handleBlur = () => this.setState({ isFocused: false })

  renderErrors = (meta, errorTextColor) => {
    const { errorTextStyle } = styles;
    if (meta.touched && meta.error) {
      return (
        <Text style={[errorTextStyle, { color: (errorTextColor ? errorTextColor : "#fff") }]}>{meta.error}</Text>
      );
    }
  };
  render() {
    const {
      meta,
      input,
      value,
      editable,
      maxLength,
      placeholder,
      onChangeText,
      label, inputStyle,
      keyboardType,
      blurOnSubmit,
      returnKeyType,
      errorTextColor,
      onSubmitEditing,
      secureTextEntry,
      customInputStyle,
      selectTextOnFocus,
      placeholderTextColor,
      customContainerStyle,
      ...inputProps
    } = this.props;
    return (
      <View style={styles.containerStyle}>

        <TextInput
          style={[styles.inputStyle, customInputStyle]}
          selectTextOnFocus={selectTextOnFocus}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          underlineColorAndroid={'transparent'}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          onChangeText={onChangeText}
          placeholder={placeholder}
          // maxLength={maxLength}
          editable={editable}
          value={value}
          baseColor={'white'}
          tintColor={'white'}
          {...input}


        />
        <View style={styles.errorContainerStyle}>{
          this.renderErrors(meta, errorTextColor)}
        </View>
      </View>
    )
  }

}

const styles = {
  inputStyle: {
    color: 'black',
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
    height: 40,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#e0e3e5',
    borderWidtqh: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  }
}
export { TextInputRoundCorner }
