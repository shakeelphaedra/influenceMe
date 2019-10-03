import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { fonts } from '../../styles';
import { CheckBox } from 'react-native-elements';
import { BlackButton } from '../common';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

class SubscriptionScreen extends Component {
  state = {
    checked: false,
    subscribed: false
  }

  render() {
    console.log(screenHeight)
    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../../assets/www/dist/img/suscriber.png')} style={styles.imageBackgroundStyle}
        >
        </Image>
        <View style={[styles.containerStyle, { justifyContent: 'flex-start', paddingHorizontal: 40, height: screenHeight }]}>
          <Text style={[styles.textStyle, { marginTop: screenHeight / 5, fontSize: 40 }]}>SUSCRIBETE</Text>
          <Text style={[styles.textStyle, { marginTop: 20, fontFamily: fonts.esp_light, color: '#484848' }]}>En InfluenceME encontrarás todas las rutinas que necesitas para alcanzar el cuerpo de tus sueños; recibirás tips y trucos de nuestros atletas e influencers además contenido exclusivo con las mejores recetas y consejos para que tlegar a tu meta no sea sólo cuestión de ficción.</Text>
          <Text style={[styles.textStyle, { fontFamily: fonts.esp_light, color: '#484848' }]}>
            {`Aún no te decides?${'\n'}Llévate todo tan sólo por:RD$ 12.5 impuestos por día.${'\n'}Acceso a todas las rutinas, Paso a paso${'\n'}consejos y trucos de nuestros Influencers`}
          </Text>
          <Text style={[styles.textStyle, { fontFamily: fonts.esp_bold, color: '#484848' }]}>Tus abdominales te lo agradecerán</Text>
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[styles.textStyle, { fontFamily: fonts.esp_light, color: '#484848' }]}>Acepto los términos y condiciones</Text>

            <CheckBox
              checkedColor="#308b82"
              iconRight
              uncheckedColor="#585858"
              checkedIcon='check'
              containerStyle={{ margin: 0, padding: 0, borderWidth: 0, }}
              checked={this.state.checked}
              onPress={() => this.setState({ checked: !this.state.checked })}
            />

          </View>
          <View style={{ marginTop: 48 }}>
            <BlackButton style={{ width: screenWidth * 0.8, height: 65, justifyContent: 'center' }} color={'white'} backgroundColor={'#fd451e'} textStyle={{ fontSize: 24, fontFamily: fonts.esp_light }} >SUSCRIBIRME</BlackButton>
          </View>
        </View>
      </View >
    )
  }
}

const styles = {
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 1,
    marginTop: -screenHeight / 5
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontFamily: fonts.esp
  },
  containerStyle: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 888,
    justifyContent: 'center'
  }
}

export default SubscriptionScreen;