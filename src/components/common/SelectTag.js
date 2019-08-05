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
              borderColo: 'black',
              height: 50,
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
      <View style={{ width: 120,flex: 1, justifyContent: 'center' ,alignItems: 'center' }}>
          <View style={{ borderRadius: 50,width: 120, height: 55, backgroundColor: 'white', borderColor: '#e0e3e5', borderWidth: 0.4}}>
            <TouchableHighlight onPress={this._toggleOption.bind(this)} style={{width: 120,height: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Text>{this.state.text}
                <FontAwesomeIcon icon={faCaretDown}  color='grey' size={20}  />
              </Text>
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
