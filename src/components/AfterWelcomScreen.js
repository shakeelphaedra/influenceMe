import React, { Component } from 'react';
import { SafeAreaView, TouchableNativeFeedback, TouchableHighlight, Platform, Text, Image, View, ImageBackground, Dimensions } from 'react-native';
import { Button, BlackButton } from './common'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class AfterWelcome extends Component {
  static navigationOptions = {
    header: null,
  };
  _renderButtton() {
    // if (Platform.OS === 'android') {
    //    return <TouchableNativeFeedback style={{fontSize: 20,width: '80%', borderRadius: 60,backgroundColor: 'black',  alignItems: 'center', alignSelf: 'center', padding: 20,}} onPress={()=>{this.props.navigation.push("LoginFormScreen")}}>
    //          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    //             <Image source={require('../assets/www/dist/img/smartphone-call.png')} style={{height: 30,width: 30,marginRight: 15 }}/>
    //             <Text style={{color: '#d75019', fontFamily: 'Esphimere', fontSize: 16}}>TU TELÉFONE </Text>
    //         </View>
    //     </TouchableNativeFeedback>    
    // } else {
    return <TouchableHighlight style={{ fontSize: 20, width: '80%', borderRadius: 60, backgroundColor: 'black', alignItems: 'center', alignSelf: 'center', padding: 20, }} onPress={() => { this.props.navigation.push("LoginFormScreen") }} underlayColor="black">
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/www/dist/img/smartphone-call.png')} style={{ height: 30, width: 30, marginRight: 15 }} />
        <Text style={{ color: '#d75019', fontFamily: 'Esphimere', fontSize: 16 }}>TU TELÉFONE </Text>
      </View>
    </TouchableHighlight>
    // }
  }
  render() {
    console.log('jjj: ', screenHeight, screenWidth);
    return (
      <ImageBackground source={require('../assets/www/dist/img/suscriber.png')} style={styles.imageBackgroundStyle}
        resizeMode='cover' >
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.containerStyle}>
            <Text style={{ textAlign: 'center', marginBottom: 30, fontSize: 18, fontFamily: 'Esphimere' }}>INGRESAR CON</Text>
            {this._renderButtton()}
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = {
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  textStyle: {
  },
  containerStyle: {
    fontSize: 20,
    height: 300
  }
}


export default AfterWelcome;