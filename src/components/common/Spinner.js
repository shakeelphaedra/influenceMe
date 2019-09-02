import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { BG_COLOR } from '../../styles';

const Spinner = ({ size, backgroundColor }) => {
  return (
    <View style={[styles.spinnerStyle, { backgroundColor: backgroundColor ? backgroundColor : BG_COLOR }]}>
      <ActivityIndicator size={'large'} color="red" busy="true" visibility="visible" />
    </View>
  )
}

const styles = {
  spinnerStyle: {
    flex: 1,
    backgroundColor: BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  }
}


export { Spinner };