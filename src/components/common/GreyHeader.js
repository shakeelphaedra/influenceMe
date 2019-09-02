import React, { Component, Fragment } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Icon from './Icon';
class GreyHeader extends Component {

  _showSearchBar() {
    navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: false
      };
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#4C4C4C', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableHighlight
            onPress={this._showSearchBar.bind(this)}
            underlayColor={'#444444'}
            style={{ marginLeft: 20, }}
            onPress={() => this.props.navigation.push("Search")}
          >
            <Icon name='uniF208' color='white' size={30} />
          </TouchableHighlight>
          <Image source={require('../../assets/www/dist/img/Icono-blanco.png')} style={{ height: 30, width: 30 }} />
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("FAQ")}
            underlayColor={'#444444'}
            style={{ marginRight: 20 }}
          >
            <Icon name='uniF19E' color='white' size={30} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export { GreyHeader }