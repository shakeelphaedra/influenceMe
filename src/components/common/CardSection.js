import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  )
}

const style = {
  containerStyle: {
    padding: 15, borderRadius: 50, height: 55, backgroundColor: 'white', width: "100%", borderColor: '#e0e3e5', borderWidth: 0.4
  }
}
export { CardSection };
