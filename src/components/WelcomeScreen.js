import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'; 
import {connect} from  'react-redux';
import * as actions from '../actions';
import {styles} from  '../styles';
import {Button} from './common';
import AppIntroSlider from 'react-native-app-intro-slider';
import firebase from 'react-native-firebase';


class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  _renderLogo(logo){
    if(logo != undefined){
      return <Image source={logo} style={{width: 100, height: 100}} resizeMode='stretch'  /> 
    }
  }

  _renderLogo2(logo){
    if(logo != undefined){
      return <Image source={logo} style={{ height: 50, width: 200}} resizeMode='stretch' /> 
    }
  }
  
  _renderItem ({item}) {
    return (
          <ImageBackground source={item.image} style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} >
            <View style={styles.introContainerStyle}>
              {this._renderLogo(item.logo)}
              {this._renderLogo2(item.logo2)}
              <Text style={styles.descriptionStyle}>{item.text}</Text>
              <Button propStyles={{backgroundColor: item.buttonColor}} onPress={() => {return this.props.navigation.navigate('AfterWelcomeScreen')  }} >EMPEZER</Button>
            </View>
          </ImageBackground>
    );
  }

  _onslideChnage (currentSlide, previousSlide) {
  }
  render () {
    return (
            <View style={{flex: 1, backgroundColor: '#000000'}}>
              <AppIntroSlider 
                renderItem={this._renderItem.bind(this)} 
                slides={this.props.slides} 
                bottomButton
                buttonStyle={{backgroundColor: '#1a1917'}}
                renderNextButton={()=> {return <Text style={styles.buttonStyle}>EMPEZER</Text>}}
                renderDoneButton={()=> {return <Text style={styles.buttonStyle}>EMPEZER</Text>}}
                style={{paddingBottom: 60}}
                showNextButton={false}
                onSlideChange={this._onslideChnage.bind(this)}
                showDoneButton={false}
              />
                <Text style={styles.bottomTextStyle}>jaiss</Text>
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