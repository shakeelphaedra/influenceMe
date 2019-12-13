import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform, ActivityIndicator, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SelectTag, Input, BlackButton, WhiteHeader, TermsAndConditions } from './common'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { influencerList, countryCodeList } from '../reducers';
import { CheckBox } from 'react-native-elements';
import { fonts } from '../styles';
// import Toast, { DURATION } from 'react-native-easy-toast'
import { showMessage } from 'react-native-flash-message';
import { NAMED_COLORS } from '../common/AppColors';
import firebase from 'react-native-firebase';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;


class LoginFormScreen extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.state = {
      canada: '',
      showCodeOptions: false,
      showInfluencerOptions: false,
      checked: false,
      loading: false,
      showDialog: false,
      influencerList: [],
      selectedInf: "Select Network",
      user: {}
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

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      })
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
    ]).start();
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.verificationSuccess(user, this.props.navigation, this.props.dispatch);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _onButtonPress() {
    console.log("clci")
    this.setState({ showList: false })
    that = this;
    if (this.state.checked) {
      const { countryCode, phone, navigation } = this.props;
      if (countryCode && phone) {
        this.props.loginUser({ number: countryCode + phone, navigation: navigation }, that)
      } else {
        showMessage({
          message: "Phone no is invalid",
          type: "danger",
          backgroundColor: NAMED_COLORS.orange,
        });
      }
    } else {
      showMessage({
        message: "Acepto los términos y condiciones",
        type: "danger",
        backgroundColor: NAMED_COLORS.orange,
      });
    }
  }
  showTerms = () => {
    this.setState({
      showDialog: true
    })
  }
  acceptTerms = () => {
    this.setState({
      showDialog: false,
      checked: true
    })
  }
  _oPhoneChange(text) {
    this.props.phoneChange(text)
  }
  _onCountryCodeChange(text) {
    this.props.countryCodeChange(text)
    list = influencerList.filter(e => e.country === text)
    this.setState({ influencerList: list.length > 0 ? list[0]['telcos'] : [], selectedInf: "" })
  }
  _onInfluencerChange(text) {
    this.props.influencerChanged(text)
  }
  render() {
    const dropdownStyle = Platform.OS === 'ios' ? { flexDirection: 'row', position: 'relative', zIndex: 9999 } : { flexDirection: 'row' };
    return (
      <View style={{ flex: 1 }}>
        <WhiteHeader onPress={() => this.props.navigation.push("AfterWelcomeScreen")} />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', backgroundColor: '#f2f2f2', height: screenHeight }}>
          <TouchableWithoutFeedback style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 20 }}
            onPress={Keyboard.dismiss}
          >
            <View>
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

                  <SelectTag options={this.state.influencerList}
                    label="influencer"
                    showList={this.state.showInfluencerOptions}
                    onSelect={this._onInfluencerChange.bind(this)}
                    value={this.state.selectedInf}
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
                  Te  enviaremos  un  mensaje  de  texto  con  tu código  de  validación  recuerda  verificar  que  tu  número  de  celular  fue  ingresado  correctamente
              </Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
                  <TermsAndConditions showDialog={this.state.showDialog} showTerms={this.showTerms} acceptTerms={this.acceptTerms} />
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
          </TouchableWithoutFeedback>
        </View>
        {
          this.props.loading ? (
            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', zIndex: 222222, height: screenHeight }}>
              <ActivityIndicator color={"red"} size={"large"} />
            </View>) : null
        }
      </View>
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
