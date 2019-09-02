import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, Platform, TouchableHighlight } from 'react-native';
import { getInfluencers, req, BASE_URL } from '../../../../API';
import { FONT_FAMILY } from '../../../styles';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message";

class Card extends Component {
  state = {
    placeHolderRemove: false
  }
  removePlaceHolder() {
    that = this;
    this.setState({ placeHolderRemove: true })
  }

  renderCard(name, subTitle,typeStyle, titleStyle, locked){
    if(locked == true){
      return (
        <View style={styles.boxShadow}>
          <View style={{ position: 'relative', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <Image source={require('../../../assets/www/dist/img/padlock.png')} style={{width:  40, height: 40, zIndex: 888, alignSelf: 'center'}}/>
            <Text style={[styles.titleStyle, titleStyle]}>{name}</Text>
            <Text style={[styles.descriptionStyle, typeStyle]}>{subTitle}</Text>
          </View>
        </View>
      )
    }else{
      return (
        <View style={styles.boxShadow}>
          <View style={{ position: 'relative', flexDirection: 'column', flex: 1 }}>
            <Text style={[styles.titleStyle, titleStyle]}>{name}</Text>
            <Text style={[styles.descriptionStyle, typeStyle]}>{subTitle}</Text>
          </View>
        </View>
      )
    }
    
  }

  render() {
    const { onPress, subTitle, name, id, image_url, titleStyle, typeStyle, locked } = this.props;
      return (
        <TouchableHighlight key={id} onPress={locked ? 
             () => showMessage({
                message: "¡no tiene saldo!",
                type: "warning",
              }) : onPress} >
          <View style={styles.backgroundImageContainerStyle} >
            <ImageBackground
              style={{ width: '100%', height: '100%', alignItems: 'center' }}
              source={{ uri: BASE_URL + image_url }}
              onLoad={this.removePlaceHolder.bind(this)}
            >
              <View ref="imagePlaceHolder" style={{ paddingLeft: 14,position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', opacity: this.state.placeHolderRemove ? 0 : 1, }}>
                <Image source={require('../../../assets/www/dist/img/picture-w.png')} style={{ height: 40, width: 40, opacity: 0.7, alignSelf: 'center', left: 0 , right: 0}}
                />
              </View>
              <ImageBackground
                style={{ width: '100%', height: '100%', }}
                source={require("../../../assets/image-overly.png")}
              >
                {this.renderCard(name, subTitle,typeStyle, titleStyle, locked)}
              </ImageBackground>
            </ImageBackground>
          </View>
        </TouchableHighlight>
      )
  }
}

const styles = {
  backgroundImageContainerStyle: {
    backgroundColor: '#A4A4A4',
    color: '#A7A7A7'
  },
  titleStyle: {
    zIndex: 2,
    fontSize: 30,
    marginBottom: 20,
    fontFamily: FONT_FAMILY,

    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    color: 'white',
    opacity: 0.8
  },
  descriptionStyle: {
    zIndex: 2,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    color: 'white',
    opacity: 0.8
  },
  boxShadow: {
    // backgroundColor:'rgba(0,0,0,0.9)',
    height: 10,
    width: '100%',
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    position: 'relative', paddingLeft: 15, paddingBottom: 20, alignItems: 'flex-end', flexDirection: 'row', flex: 1
  }

}
export default Card;