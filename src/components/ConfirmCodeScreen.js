import CodeInput from 'react-native-confirmation-code-input';
import React, { Component } from 'react';
import { BlackButton, WhiteButton, WhiteHeader } from './common';
import { View, Alert, Dimensions, Image, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { SET_CURRENT_USER, SET_LOADING_TRUE } from '../actions/types'
import { showMessage, hideMessage } from "react-native-flash-message";
import { fonts } from '../styles';
import InfoPopup from './common/InfoPopup';
const screenHeight = Dimensions.get("window").height;

class ConfirmCodeScreen extends Component {
  state = {
    buttonColor: 'white',
    dialogCheckVisiable: false
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 5,
        boxShodow: 4,
        backgroundColor: 'white'
      },
      headerTitle: <Image source={require('../assets/www/dist/img/Icono-negro.png')} style={{ height: 30, width: 30, marginBottom: 60 }} />,
      headerLeft: null,
      headerRight: null
    }
  }
  noHandler = () => {
    this.setState({ dialogCheckVisiable: false })
  }
  _onConfirmCode() {
    if (this.props.confirmCode == "") {
      return Alert.alert("Code is empty ")
    } else {
      return this.props.CodeConfirm({ val: this.props.confirmCode, navigation: this.props.navigation, confirmResult: this.props.confirmResult, confirmForm: this })
    }
  }

  _onFinishCheckingCode1(code) {
    this.props.confirmCodeChange(code)
  }

  componentDidMount() {
    showMessage({
      message: "SMS envido",
      backgroundColor: '#50ae54',
      type: "success",
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}
      keyboardShouldPersistTaps='handled'>
        <View style={{ height: screenHeight }}><WhiteHeader onPress={() => this.props.navigation.goBack()} />
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF0F1' }}>
            <View style={{ marginLeft: 50, marginRight: 50, flexDirection: 'column', alignItems: 'center', }}>
              <Text style={{ fontFamily: fonts.esp_extraLight, alignSelf: 'center', justifyContent: 'center', fontSize: 18, fontWeight: '300', marginTop: 30 }}>Ingresa el Código</Text>
              <Text style={{ color: '#d75019', top: 0, fontFamily: fonts.esp_light, fontSize: 20, marginVertical: 10, marginTop: 50 }}>{this.props.phone}</Text>
              <View style={{ height: 100 }}>
                <CodeInput
                  ref="codeInputRef2"
                  activeColor='rgba(49, 180, 4, 1)'
                  inactiveColor='rgba(49, 180, 4, 1.3)'
                  autoFocus={false}
                  codeLength={6}
                  ignoreCase={true}
                  inputPosition='center'
                  codeInputStyle={{}}
                  containerStyle={{}}
                  onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                  containerStyle={{ marginVertical: 10 }}
                  codeInputStyle={{
                    color: 'black', borderRadius: 12, width: 25, height: 40, borderWidth: 0, backgroundColor: 'white', shadowOffset: { width: 0, height: 2, },
                    shadowOpacity: 1,
                    shadowRadius: 5.84,
                    elevation: 2,
                    marginLeft: 20
                  }}
                />
              </View>
              <Text style={{ color: '#d75019', fontFamily: fonts.esp_light, marginTop: 0, marginBottom: 60, fontSize: 20 }}>No obtuve un código</Text>


              <View style={{ height: '50%', alignItems: 'center' }}>
                <BlackButton color="#d75019" backgroundColor={this.state.buttonColor} fontSize={22} style={{
                  paddingVertical: 30, width: 250, shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2, },
                  shadowOpacity: 0.35,
                  shadowRadius: 3.84,
                  elevation: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }} onPress={this._onConfirmCode.bind(this)}>REGISTRAR</BlackButton >
                <BlackButton color="black" backgroundColor="white" fontSize={20} style={{
                  paddingVertical: 30, paddingLeft: 2, paddingRight: 2, width: 250, shadowOffset: { width: 0, height: 2, },
                  shadowOpacity: 0.35,
                  shadowRadius: 3.84,
                  elevation: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc', marginTop: 10
                }} onPress={() => this.props.navigation.goBack()}>CAMBRIAR NÚMBERO</BlackButton >
              </View>
            </View>
          </View>
        </View>
        {
          this.props.loading ? (
            <View style={{ position: 'absolute',alignItems: 'center' ,justifyContent: 'center' , alignSelf: 'center', zIndex: 222222, height: screenHeight }}>
              <ActivityIndicator color={"red"} size={"large"} />
            </View>) :
            null
        }
        <InfoPopup border="no" visible={this.state.dialogCheckVisiable} tick={"cross"} yesHandler={this.noHandler} yesButtonText="OK" heading="Código Inválido" description={`El código que ingresaste no es válido, asegúrate que estás ${'\n'}  ingresando el código ${'\n'} proporcionado correctamente. Si ${'\n'} aún no logras acceder vuelve a enviar el SMS del código de verificación.`} />
      </ScrollView>
    )
  }
}

const mapStatsToProps = (state) => {
  return {
    confirmResult: state.auth.confirmResult,
    confirmCode: state.auth.confirmCode,
    phone: state.auth.countryCode + state.auth.phone,
    loading: state.auth.loading
  }
}

export default connect(mapStatsToProps, actions)(ConfirmCodeScreen);