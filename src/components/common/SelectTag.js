import React, { Component } from 'react';
import {Image, View, Text, TouchableHighlight} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';


class SelectTag extends Component {
  state = {
    showList: this.props.showList,
    text: this.props.value
  }

  selectOption (value) {
    this.setState({showList: !this.state.showList})
    this.setState({text: value})
    this.props.onSelect(value)
  }
  componentWillReceiveProps(props){
    this.setState({showList: props.showList})
  }
  _renderOptions (){
    if(this.state.showList){
      return this.props.options.map( option => {
        return (
          <TouchableHighlight key={option.value}
            onPress={() => {
              this.selectOption(option.value)
            }}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              height: 50,
              fontFamily: 'Esphimere',
              position: 'relative',
              zIndex: 444444090450945490950,
            }}
            >
              <Text>{option.value}</Text>
          </TouchableHighlight>
        )
      })
    }
  }
  _toggleOption () {
    this.setState({showList: !this.state.showList})
  }
  render() {
    return (
      <View style={{flex: 1, margin: 20 }}>
          <View style={{ padding: 15, borderRadius: 50,height: 55, backgroundColor: 'white',width: "100%", borderColor: '#e0e3e5', borderWidth: 0.4}}>
            <TouchableHighlight onPress={this._toggleOption.bind(this)} style={{height: '100%', justifyContent: 'center'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text></Text>
                <Text style={{fontFamily: 'Esphimere'}}>{this.state.text}
                </Text>
                <FontAwesomeIcon icon={faCaretDown}  color='grey' size={20} />
              </View>
            </TouchableHighlight>
          </View>

          <View style={{zIndex: 444}}>
            {this._renderOptions()}
          </View>
      </View>
    );
  }
}

export  {SelectTag};
