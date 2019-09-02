import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FONT_FAMILY } from '../../styles';
import Icon from './Icon';

class BackButton extends Component {

  render() {
    const { onPress } = this.props
    return (
      <View style={[styles.containerStyle, this.props.containerStyle]}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <TouchableOpacity onPress={onPress}>
            <View style={[{ marginTop: 15, marginLeft: 15, flexDirection: 'row', alignItems: 'flex-start', height: 30, width: 30, justifyContent: 'center' }, this.props.buttonStyle]}>
              <Icon name='uniF1F9' color='white' size={30} />
            </View>
          </TouchableOpacity>
          <View>{this.props.children}</View>
          <View></View>
        </View>
      </View>
    )
  }

}
const styles = {
  containerStyle: {
    height: 70,
    position: 'absolute',
    top: 0,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0
    },
    zIndex: 99999,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
}

export { BackButton }