import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import InputField from '../../common/Input';
import { Field, reduxForm } from 'redux-form'
import { NAMED_COLORS } from '../../common/AppColors';
import { BlackButton, Popup } from '../common';
import AppText from '../../common/AppText';
import { connect } from 'react-redux';
import Icon from '../common/Icon';
import { fonts } from '../../styles';
import * as actions from '../../actions';
import { checkSubscription } from '../../../API';


let Screenheight = Dimensions.get('window').height;
class CancelSubscriptionScreen extends Component {

  state = {
    mode: "", message: "", subscribed: false
  }

  async componentDidMount() {
    this.setStates()
  }

  setStates = async () => {
    checkSubscription().then(res => {
      if (res.return) {
        return this.setState({ subscribed: res.subscribed, message: res.message, mode: res.mode })
      }
    })
  }

  render() {
    props = this.props;
    return (
      <View style={styles.container}>
        {/*  =======   header container  ======*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.touchableOpacityStyle}>
            <Icon name='uniF1F9' color='white' size={28} />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: NAMED_COLORS.white, fontFamily: fonts.esp, fontSize: 12 }}>Cancelar Suscription</Text>
          <TouchableOpacity
            onPress={() => {
              if (!(Platform.OS === 'ios') && this.state.mode && this.state.mode === "google_play") {
                Linking.openURL('https://play.google.com/store/account/subscriptions?package=com.influenceme&sku=influenceme_premium_1')
              }
            }}
            style={styles.touchableOpacityStyle}>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 40, marginBottom: 10, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5 }}>
          <AppText numberOfLines={3} style={{ color: 'white', textAlign: 'center', fontSize: 12, lineHeight: 15, fontFamily: fonts.esp_light }}>NO NOS DIGAS QUE TE VAS</AppText>
          <AppText numberOfLines={3} style={{ color: 'white', textAlign: 'center', fontSize: 10, lineHeight: 15, fontFamily: fonts.esp_light }}>Es una pena verte partir, no va a ser lo mismo sin ti.</AppText>
          <AppText numberOfLines={3} style={{ color: 'white', textAlign: 'center', fontSize: 12, lineHeight: 15, fontFamily: fonts.esp_light }}>Contacta a Soporte si tienes algún problema y llegaremosa ti råpidamente.</AppText>
          <AppText numberOfLines={3} style={{ color: 'white', textAlign: 'center', fontSize: 12, lineHeight: 15, fontFamily: fonts.esp_light }}>Aún quieres Cancelar tu Suscripción?, da click en el botón de abajo.</AppText>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: '80%',
            alignSelf: 'center'
          }}
        />
      </View>
    )
  }
}

const validate = values => {

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAMED_COLORS.backgroundDarkGray
  },
  header: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: NAMED_COLORS.darkGray,
    paddingLeft: 10,
    paddingRight: 10,
  },
  touchableOpacityStyle: {
    flex: 0.1,
    alignSelf: 'center'

  },

  touchableOpacityStyle: {
    flex: 0.5,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    height: Screenheight * 0.06,
    backgroundColor: NAMED_COLORS.darkGray,
    marginBottom: 2,
    marginTop: 2,
    padding: 15
  },
  headingRow: {
    flexDirection: 'row',
    height: Screenheight * 0.06,
    marginBottom: 2,
    marginTop: 2,
    padding: 15
  },
  leftArrowWithText: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftArrowImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain"
  },
  innerTextStyle: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: fonts.esp,
    fontSize: 12,
  },
  input: {
    color: 'white',
    paddingLeft: 30,
    height: 60,
    fontFamily: fonts.esp,
    paddingRight: 30,
  },

  userPic: {
    height: Screenheight * 0.14,
    alignItems: 'center',
    backgroundColor: NAMED_COLORS.backgroundDarkGray,
    justifyContent: 'center'
  },
});
const mapsStateToProps = (state) => {
  return ({
    subscription: true
  })
}
export default connect(mapsStateToProps, actions)(reduxForm({
  form: 'CancelSubscription',
  enableReinitialize: true,
  validate,
})(CancelSubscriptionScreen))