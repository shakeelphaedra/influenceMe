import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native'

class PickerSelect extends Component {
  state = { user: "lbs" }
  updateUser = (user) => {
    this.setState({ user: user })
  }
  render() {
    const { input: { onChange, value, ...inputProps }, children, ...pickerProps } = this.props;
    return (
      <View style={{ marginTop: 20 }}>
        <Picker
          selectedValue={value}
          style={{ backgroundColor: 'white' }}
          onValueChange={value => onChange(value)}
          {...inputProps}
          {...pickerProps}
        >
          {children}

        </Picker>
      </View>
    )
  }
}
export { PickerSelect };

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
})
