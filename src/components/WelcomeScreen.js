import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    ImageBackground, 
    Animated,
    Platform,
    PanResponder, TouchableOpacity,
    Dimensions} from 'react-native'; 
import {connect} from  'react-redux';
import * as actions from '../actions';
import {styles} from  '../styles';
import  {BlackButton} from './common';
import AfterWelcome from './AfterWelcomScreen'
import Navigation from 'react-native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    fadeIn: new Animated.Value(1),
    fadeOut: new Animated.Value(0),
    prevIndex: this.props.slides.length - 1,
    nextIndex: 1,
    action: 'next',
    showAfter: false,
    currentIndex: 0
  }
  constructor(props) {
    super(props)
    // this._panResponder = PanResponder.create({
    //   onStartShouldSetPanResponder: (evt, gestureState) => true,
    //   onMoveShouldSetPanResponder:(evt, gestureState) => true,
    //     onPanResponderMove: (evt, gestureState) => {
    //         // DO JUNK HERE
    //         Animated.timing(this.state.fadeIn, {
    //           toValue: 1-gestureState.dx/screenWidth*2,
    //           duration: 300
    //         }).start()
    //         Animated.timing(this.state.fadeOut, {
    //           toValue: gestureState.dx/screenWidth*2,
    //           duration: 300
    //         }).start()
    //     },
    
    //   onPanResponderStart: (evt, gestureState) => {
    //     console.log(gestureState.dx)
    //   },
    //   onPanResponderTerminationRequest: (evt, gestureState) => true,
    //   onPanResponderRelease: (evt, {vx, dx}) => {
    //     if(dx/screenWidth < -0.3){
    //       return this._nextSlide()
    //     }else{
    //       if(dx/screenWidth > 0.3){
    //         console.log("back")
    //         return this._prevSlide()
    //       }else{
    //         Animated.timing(this.state.fadeIn, {
    //           toValue: 1,
    //           duration: 300
    //         }).start()
    //         Animated.timing(this.state.fadeOut, {
    //           toValue: 0,
    //           duration: 300
    //         }).start()
    //       }
    //     }
    //   },
    //   onShouldBlockNativeResponder: (evt, gestureState) => {
    //     // Returns whether this component should block native components from becoming the JS
    //     // responder. Returns true by default. Is currently only supported on android.
    //     return true;
    //   },
    // });
  }
  componentDidMount() {
    this._interval = setInterval(() => {
      this._nextSlide()
    }, 8000);
  }
  _nextSlideIndexStateChange() {
    if (this.state.currentIndex == this.props.slides.length -1){
      this.setState({prevIndex: this.state.currentIndex ,currentIndex: 0, nextIndex: 1, action: 'next'})
    }else{
      this.setState({action: 'next', nextIndex:  (this.state.currentIndex == this.props.slides.length -2 ? 0 : this.state.currentIndex+2) ,currentIndex:  this.state.currentIndex+1, prevIndex: this.state.currentIndex})
    }
  }
  
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  _nextSlide( ){ 
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: 1000
    }).start()
    Animated.timing(this.state.fadeOut, {
      toValue: 1,
      duration: 1000
    }).start()
    setTimeout(()=> {
      this._nextSlideIndexStateChange()
      Animated.timing(this.state.fadeIn, {
        toValue: 1,
        duration: 1000
      }).start()
      Animated.timing(this.state.fadeOut, {
        toValue: 0,
        duration: 1000
      }).start()
      setTimeout(() => {
      }, 600);
    },600)
    // this[`slide-${this.state.currentIndex}`].setNativeProps({style: {opacity: this.state.fadeOut} })
    // this[`slide-${this.state.nextIndex}`].setNativeProps({style: {opacity: this.state.fadeIn} })
  }
  _prevSlide( ){ 
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: 1000
    }).start()
    Animated.timing(this.state.fadeOut, {
      toValue: 1,
      duration: 1000
    }).start()
    setTimeout(()=> {
      this._prevSlideSetStates()
      Animated.timing(this.state.fadeIn, {
        toValue: 1,
        duration: 0
      }).start()
      Animated.timing(this.state.fadeOut, {
        toValue: 0,
        duration: 0
      }).start()
      setTimeout(() => {
      }, 600);
    },600)
    // this[`slide-${this.state.currentIndex}`].setNativeProps({style: {opacity: this.state.fadeOut} })
    // this[`slide-${this.state.nextIndex}`].setNativeProps({style: {opacity: this.state.fadeIn} })
  }

  _prevSlideSetStates () {
    if (this.state.currentIndex == 0)
      return this.setState({action: 'previous',currentIndex:  this.props.slides.length -1, prevIndex: this.props.slides.length -2, nextIndex: 0})
    return this.setState({action: 'previous',currentIndex:  this.state.currentIndex-1, prevIndex: (this.state.currentIndex == 1 ? this.props.slides.length - 1 : this.state.currentIndex-2), nextIndex: this.state.currentIndex })
  }
 
  _renderLogo(item){
    if(item.logo != undefined){
      return <Image source={item.logo} style={{width: 110, height: 110, marginBottom: -10}} resizeMode='stretch'  /> 
    }else{
      return <Text style={styles.titleStyle}>{item.title}</Text>
    }
  }

  _renderLogo2(logo){
    if(logo != undefined){
      return <Image source={logo} style={{ height: 50, width: 320}} resizeMode='stretch' /> 
    }
  }

  _navigateNext(){
    console.log('sss')
    this.props.navigation.push("AfterWelcomeScreen")
  }
  _setZindex(index) {
    if(index== this.state.currentIndex)
      return 9999
    return 1
  }

  _setOpacity (index) {
    if(index == this.state.currentIndex)
      return this.state.fadeIn
    if((this.state.action == "next") && (index==this.state.nextIndex))
      return this.state.fadeOut 
    if((this.state.action == "previous") && index==this.state.prevIndex )
      return this.state.fadeOut 
    return 0
  }
  _renderDot(){
    array = []
    for(i = 0; i < this.props.slides.length; i++) { 
        array.push(
          <View style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            margin: 2,
            opacity: i==this.state.currentIndex ? 1 : 0.5
          }}></View>
        )
      }
      return array
  }

  _renderItem (item, index) {
    return (
        <View>
          <Animated.View 
            key={index} 
            style={{
                height: Platform.OS =="ios" ? screenHeight*0.88 : screenHeight,
                width: screenWidth,position: 'absolute',
                opacity: this._setOpacity(index),
                zIndex: this._setZindex(index),
                alignItems: 'center' ,alignSelf: 'center', 
                flexDirection: 'column', justifyContend: 'center'
            }}>
            <ImageBackground source={item.image}  style={{ flex: 1, height: '110%',width: Platform.OS=='ios'? '100%' : '105%' }} >
              <View style={styles.introContainerStyle}>
                {this._renderLogo(item)}
                {this._renderLogo2(item.logo2)}
                <Text style={styles.descriptionStyle}>{item.text}</Text>
                <View style={{marginTop: 30}}>
                    <BlackButton onPress={this._navigateNext.bind(this)} color={item.color} backgroundColor={item.buttonColor} styleC={{position: 'relative', zIndex: 555}}>EMPREZAR</BlackButton>
                </View>
                <Text style={{color: 'white', fontFamily: 'Esphimere'}}>Ingresa a ty cuenta</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', position: 'absolute', zIndex: 444, bottom: 135, justifyContent:'center', alignItems: 'center',left: 0,right: 0}}>
                {this._renderDot()}
              </View>
            </ImageBackground>
          </Animated.View>
          
        </View>
    );
  }
  renderItems () {
    return this.props.slides.map( (item,index) => {
      return this._renderItem(item, index)
    })
  }
  _welcomeScreen () {
    return (<View  style={{flex: 1, backgroundColor: '#000000'}}>
      {this.renderItems()}
    </View>)
  }

  render () {
      return this._welcomeScreen()
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