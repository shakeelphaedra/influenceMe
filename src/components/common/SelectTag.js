import React, { Component } from 'react';
import {Image, View, Text, TouchableHighlight, Platform} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Flag from 'react-native-flags';
import { fonts } from '../../styles';

class SelectTag extends Component {
  state = {
    showList: this.props.showList,
    text: this.props.value,
    selectedFlag: this.props.flag
  }

  selectOption (option) {
    this.setState({showList: !this.state.showList})
    this.setState({text: option.value, selectedFlag: option.flag})
    this.props.onSelect(option.value)
  }
  componentWillReceiveProps(props){
    this.setState({showList: props.showList})
  }
  _renderFlag(option) {
    if(option.flag){
      switch (option.flag){
        case 'do':
          return <Image source={require(`../../assets/flags/do.png`)} style={{height: 13, width: 18}}/>
        case 've':
          return <Image source={require(`../../assets/flags/ve.png`)} style={{height: 13, width: 18}}/>
        case 'co':
          return <Image source={require(`../../assets/flags/co.png`)} style={{height: 13, width: 18}}/>
        
      }
    }
  }
  _renderOptions (){
    const dropdownStyle = Platform.OS === 'ios' ? {position: 'absolute',top: 55,left:0,right:0,borderColor:'#d6d6d6',borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderWidth:1,backgroundColor: '#fff'} : {zIndex:555555, position: 'absolute',top: 55,left:0,right:0,borderColor:'#d6d6d6',borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderWidth:1,backgroundColor: '#fff'};
    if(this.state.showList){
      return (
        <View style={dropdownStyle}>
          {this.props.options.map( (option,i) => {
            return (
              <TouchableHighlight key={option.value}
                onPress={() => {
                  this.selectOption(option)
                }}
                style={{
                  backgroundColor: 'white',
                  fontFamily: 'Esphimere',
                  width: '100%',
                  alignSelf: 'center',
                  paddingVertical: 6,
                  height: 30,
                  borderBottomColor: '#d6d6d6',
                  borderBottomLeftRadius: this.props.options.length -1 == i ? 16 : 0, 
                  borderBottomRightRadius: this.props.options.length -1 == i ? 16 : 0, 
                  borderBottomWidth: this.props.options.length -1 == i ? 0 : 1,
                }} underlayColor='white'
                >
                  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    {this._renderFlag(option)}
                    <Text style={{fontFamily: 'Esphimere',marginLeft: 5, fontSize: 13}}>{option.value}</Text>
                  </View>
              </TouchableHighlight>
            )
          })}
        </View>
      )
    }
  }
  _toggleOption () {
    this.setState({showList: !this.state.showList})
  }
  _renderSelectedFlag(flag){
    if(flag){
      switch (flag){
        case 'do':
          return <Image source={require(`../../assets/flags/do.png`)} style={{height: 13, width: 18}}/>
        case 've':
          return <Image source={require(`../../assets/flags/ve.png`)} style={{height: 13, width: 18}}/>
        case 'co':
          return <Image source={require(`../../assets/flags/co.png`)} style={{height: 13, width: 18}}/>
      }
    }
  }
  render() {
    return (
      <View style={{flex: 1, margin: 20 }}>
          <View style={{ padding: 15, borderRadius: 50,height: 55, backgroundColor: 'white',width: "100%", borderColor: '#e0e3e5', borderWidth: 0.4}}>
            <TouchableHighlight onPress={this._toggleOption.bind(this)} style={{height: '100%', backgroundColor: 'white',justifyContent: 'center', flex: 1}} underlayColor='white'>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
                  {this._renderSelectedFlag(this.state.selectedFlag)}
                  <Text style={{fontFamily: fonts.esp_light, marginLeft: 5}}>{this.state.text}</Text>
                </View>
                <FontAwesomeIcon icon={faCaretDown}  color={this.state.showList ? 'green' : 'grey'} size={20} />
              </View>
            </TouchableHighlight>
          </View>
          {this._renderOptions()}
      </View>
    );
  }
}

export  {SelectTag};
