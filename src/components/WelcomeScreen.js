import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'; 
import {Button} from  './common';
import Carousel from 'react-native-snap-carousel';
import {connect} from  'react-redux';
import * as actions from '../actions';
import {sliderWidth,itemWidth, styles} from  '../styles';
import AppIntroSlider from 'react-native-app-intro-slider';

class WelcomeScreen extends Component {
  goToSignIn () {
      
  }
  _renderItem = ({item}) => {
    return (
        <View style={styles.slide}>
          <ImageBackground source={item.image} style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </ImageBackground>
        </View>
    );
  }
  _onDone = () => {
    this.props.navigation.navigate('LoginForm')
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state

  }
  render () {
    return (
            <View style={{flex: 1}}>
              <AppIntroSlider 
                renderItem={this._renderItem} 
                slides={this.props.slides} 
                onDone={this._onDone} 
                bottomButton
                buttonStyle={{backgroundColor: '#1a1917'}}
                renderNextButton={()=> {return <Text style={styles.buttonStyle}>EMPEZER</Text>}}
                renderDoneButton={()=> {return <Text style={styles.buttonStyle}>EMPEZER</Text>}}
                onDone={this._onDone.bind(this)} 
                style={{flex: 8}}
              />
              <View style={{backgroundColor: "#1a1917" }}>
                <Text>jaiss</Text>
              </View>
            </View>
            )
  }
}

const mapStatsToProps = (state,ownProps) =>{
  console.log(state)
  return {
    slides: state.entries,
    showRealApp: state.showRealApp
  }
}

export default connect(mapStatsToProps,actions )(WelcomeScreen);