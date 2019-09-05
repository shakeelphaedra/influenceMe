import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform, ScrollView, ActivityIndicator, } from 'react-native';
import { Spinner, SelectTag, Input, BlackButton, WhiteHeader, TermsAndConditions } from './common'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { influencerList, countryCodeList } from '../reducers';
import { CheckBox } from 'react-native-elements';
import { fonts } from '../styles';
import Toast, { DURATION } from 'react-native-easy-toast'
import { showMessage } from 'react-native-flash-message';
import { NAMED_COLORS } from '../common/AppColors';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class LoginFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canada: '',
      showCodeOptions: false,
      showInfluencerOptions: false,
      checked: false,
      loading: false,
      showDialog: false
    };
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
  _onButtonPress() {
    console.log("clci")
    this.setState({ showList: false })
    that = this;
    if (this.state.checked) {
      const { countryCode, phone, navigation } = this.props;
      this.props.loginUser({ number: countryCode + phone, navigation: navigation }, that)
    } else {
      showMessage({
        message: "Acepto los termino y condiciones",
        type: "danger",
        backgroundColor: NAMED_COLORS.orange,
      });
    }
  }
  showTerms = () => {
    this.setState({
      showDialog:  true
    })
  }
  acceptTerms = () => {
    this.setState( {
      showDialog: false,
      checked: true
    })
  }
  _oPhoneChange(text) {
    this.props.phoneChange(text)
  }
  _onCountryCodeChange(text) {
    this.props.countryCodeChange(text)
  }
  _onInfluencerChange(text) {
    this.props.influencerChanged(text)
  }
  render() {
    const dropdownStyle = Platform.OS === 'ios' ? { flexDirection: 'row', position: 'relative', zIndex: 9999 } : { flexDirection: 'row' };
    return (
      <ScrollView style={{ flex: 1, }}
      keyboardShouldPersistTaps='handled'
      >
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', backgroundColor: '#f2f2f2', height: screenHeight }}>
          <WhiteHeader onPress={() => this.props.navigation.push("AfterWelcomeScreen")} />
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 20 }}>
            <View style={Platform.OS === 'ios' ? { position: 'relative', zIndex: 9999 } : {}}>
              <Text style={{ fontFamily: fonts.esp_extraLight, alignSelf: 'center', fontSize: 17, }}>Ingresa con tu número móvil</Text>
              <View style={dropdownStyle}>
                <SelectTag options={countryCodeList}
                  label="country_code"
                  showList={this.state.showCodeOptions}
                  onSelect={this._onCountryCodeChange.bind(this)}
                  value={this.props.countryCode}
                  flag={this.props.flag}
                  onPress={() => { this.setState({ showInfluencerOptions: false }) }}
                  style={{ width: 10 }} />
                <SelectTag options={influencerList}
                  label="influencer"
                  showList={this.state.showInfluencerOptions}
                  onSelect={this._onInfluencerChange.bind(this)}
                  value={this.props.influencer}
                  onPress={() => { this.setState({ showCodeOptions: false }) }}
                  style={{ width: 20 }} />
              </View>
            </View>
            <Input
              value={this.props.phone}
              label="Phone"
              onSelect={() => this.setState({ showList: false })}
              placeholder="Numero de Celular"
              keyboardType='numeric'
              // inputStyle={{borderRadius: 50, height: '100%', fontWeight: '200'}}
              onChangeText={this._oPhoneChange.bind(this)}
            />
            <View style={{ padding: 20, marginTop: 30 }}>
              <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: fonts.esp_extraLight, fontWeight: '300', lineHeight: 26 }}>
                Te  enviaremos  un  mensaje  de  texto  con  tu código  de  validacaión  recuerda  verificar  que  tu  número  de  celular  fue  ingresado  correctamente
                            </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
                <TermsAndConditions showDialog={this.state.showDialog} showTerms={this.showTerms} acceptTerms={this.acceptTerms}/>
                <CheckBox
                  checkedColor="#308b82"
                  uncheckedColor="#585858"
                  containerStyle={{ margin: 0 }}
                  checked={this.state.checked}
                  onPress={() => this.setState({ checked: !this.state.checked })}
                />
              </View>
            </View>
            <View>
              <BlackButton color="#d75019" backgroundColor="black" style={{
                paddingVertical: 20, shadowOffset: { width: 0, height: 2, },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 5,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }} onPress={() => this._onButtonPress()}>ENVIAR SMS</BlackButton>
            </View>
          </View>
        </View>
        {
          this.props.loading ? (
            <View style={{ position: 'absolute', top: screenHeight / 2, right: screenWidth / 2, zIndex: 222222 }}>
              <ActivityIndicator color={"red"} size={"large"} />
            </View>) :
            null
        }
        {/* <Toast
                    ref="toast"
                    style={{backgroundColor:'red', position: 'absolute', width: screenWidth, borderRadius: 0, height: screenWidth*0.15, alignItems: 'center',justifyContent: 'center'}}
                    position='top'
                    fadeOutDuration={0}
                    fadeInDuration={0}
                    positionValue={screenHeight*0.8999}
                    opacity={1}
                    textStyle={{color:'white', bottom: 0, fontFamily: fonts.esp, alignSelf: 'flex-start'}}
                /> */}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  phone: state.auth.phone,
  loading: state.auth.loading,
  phoneCode: state.auth.phoneCode,
  countryCode: state.auth.countryCode,
  influencer: state.auth.influencer,
  flag: state.auth.flag,
  loading: state.auth.loading
})

export default connect(mapStateToProps, actions)(LoginFormScreen);
