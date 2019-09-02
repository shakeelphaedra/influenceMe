import React, {Component} from 'react';
import {View,Text} from 'react-native';

class NoItem extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.textStyle}>{ this.props.text || 'aún no tienes contenido'}</Text>
      </View>
    )
  }

}
const styles = {
  textStyle: {
    color: 'white', 
    alignSelf: 'center', 
    opacity: 0.5,
    textAlign: 'center', 
    flex: 1
  }
}  
export {NoItem}