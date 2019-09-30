import React, { Component } from 'react';
import { View, Animated, Text, Image, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AppText from '../../common/AppText';
import { NAMED_COLORS } from '../../common/AppColors';
import arrowRight from '../../assets/www/dist/img/right-arrow.png';
let width = Dimensions.get('window').width;
let Screenheight = Dimensions.get('window').height;
import Icon from '../common/Icon';
import { fonts } from '../../styles';
import firebase from 'react-native-firebase';
import { Spinner, GreyHeaderWithBackButton } from '../common';
import { connect } from 'react-redux';

class SettingsScreen extends Component {
  state = { loading: false , subscribed:  false}
  constructor(props) {
    super(props)
    this.opacityProfilePic = new Animated.Value(0)
    this._opacityAnimationValue1 = new Animated.Value(0);
    this._opacityAnimationValue2 = new Animated.Value(0);
    this._opacityAnimationValue3 = new Animated.Value(0);
    this._opacityAnimationValue4 = new Animated.Value(0);
    this._opacityAnimationValue5 = new Animated.Value(0);
    this._opacityAnimationValue6 = new Animated.Value(0);
    this._opacityAnimationValue7 = new Animated.Value(0);
    this._opacityAnimationValue8 = new Animated.Value(0);
    this._moveAnimationValue = new Animated.ValueXY();
  }

  signOutAsync = (navigation) => {
    that = this;
    this.setState({ loading: true })
    firebase.auth().signOut().then(() => {
      AsyncStorage.clear();
      navigation.navigate('BeforeLoginNavigation');
      that.setState({ loading: false })
    }).catch(e => {
      that.setState({ loading: false })
    })
  };

  _renderSubscription() {
    if((this.props.subscription == "paid") || (this.props.subscription._55 == "paid")){
      return(
        <Animated.View style={[styles.row, { width: this._opacityAnimationValue7, transform: this._moveAnimationValue.getTranslateTransform() }]}>
          <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Cancelar Suscription</AppText>
          <View style={styles.leftArrowWithText}>
            <AppText style={styles.innerTextStyle}></AppText>
            <TouchableOpacity style={styles.imageClick} onPress={() => this.props.navigation.push("CancelSubscription")}>
              <Image source={arrowRight} style={styles.leftArrowImage} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )
    }else{
      return (
        <Animated.View style={[styles.row, { width: this._opacityAnimationValue7, transform: this._moveAnimationValue.getTranslateTransform() }]}>
          <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Suscription</AppText>
          <View style={styles.leftArrowWithText}>
            <AppText style={styles.innerTextStyle}></AppText>
            <TouchableOpacity style={styles.imageClick} onPress={() => this.props.navigation.push("SubscriptionScreen")}>
              <Image source={arrowRight} style={styles.leftArrowImage} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )
      
    }
  }

  componentDidMount() {
    Animated.timing(this.opacityProfilePic, {
      toValue: 1,
      duration: 2000,
    }).start()
    setTimeout(() => {
      [1, 2, 3, 4, 5, 6, 7, 8].forEach((val) => {
        setTimeout(() => {
          Animated.timing(this["_opacityAnimationValue" + val], {
            toValue: width,
            duration: 500
          }).start()
        }, 50 * val);
      })
    }, 50)
  }
  render() {
    const { handleGmailUpdate, signOutAsync, handleWeightUpdate, phoneNumber, email, heightScale, weightScale } = this.props;
    if (this.state.loading)
      return <Spinner size="large" />
    return (
      <Animated.View style={styles.container}>
        <GreyHeaderWithBackButton text="Perfil" navigation={this.props.navigation}/>

        <ScrollView style={{ flex: 0.65, backgroundColor: NAMED_COLORS.backgroundDarkGray }}>
          <Animated.View style={[styles.userPic, { opacity: this.opacityProfilePic }]}>
            <Icon name='uniF25E' color={'white'} size={60} />
          </Animated.View>
          <Animated.View style={[styles.row, { width: this._opacityAnimationValue1, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Nombre</AppText>
            <View style={styles.leftArrowWithText}>
              <AppText style={styles.innerTextStyle}>{phoneNumber}</AppText>
            </View>
          </Animated.View>
          <Animated.View style={[styles.row, { width: this._opacityAnimationValue2, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <AppText style={{ flex: 0.6, alignSelf: 'center' }}>
              Correo
            </AppText>
            <View style={styles.leftArrowWithText}>
              <AppText style={styles.innerTextStyle}>{email}</AppText>
              <TouchableOpacity onPress={handleGmailUpdate} style={styles.imageClick}>
                <Image source={arrowRight} style={styles.leftArrowImage} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Animated.View style={[styles.row, { width: this._opacityAnimationValue3, transform: this._moveAnimationValue.getTranslateTransform() }]}>

            <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Unidades de Peso</AppText>
            <View style={styles.leftArrowWithText}>
              <AppText style={styles.innerTextStyle}>{weightScale}</AppText>
              <TouchableOpacity style={styles.imageClick} onPress={handleWeightUpdate}>
                <Image source={arrowRight} style={styles.leftArrowImage} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Animated.View style={[styles.row, { width: this._opacityAnimationValue4, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Unidades de Altura</AppText>
            <View style={styles.leftArrowWithText}>
              <AppText style={styles.innerTextStyle}>{heightScale}</AppText>
              <TouchableOpacity style={styles.imageClick} onPress={() => this.props.navigation.push("UpdateHeightScreen")}>
                <Image source={arrowRight} style={styles.leftArrowImage} />
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* ===========MI SUSCRIPCION ============== */}
          <Animated.View style={[styles.headingRow, { width: this._opacityAnimationValue5, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <AppText style={{ alignSelf: 'center' }}>MI SUSCRIPCION</AppText>
          </Animated.View>

          <Animated.View style={[styles.row, { width: this._opacityAnimationValue6, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <AppText style={{ flex: 0.6, alignSelf: 'center' }}>Estado</AppText>
            <View style={styles.leftArrowWithText}>
              <AppText style={styles.innerTextStyle}>Activo</AppText>
            </View>
          </Animated.View>
          {this._renderSubscription()}
          {/* =============== logout ================ */}
          <Animated.View style={[{ width: this._opacityAnimationValue8, transform: this._moveAnimationValue.getTranslateTransform() }]}>
            <TouchableOpacity onPress={() => this.signOutAsync(this.props.navigation)}>
              <View style={[styles.headingRow, { backgroundColor: NAMED_COLORS.orangeColor }]}>
                <AppText style={{ alignSelf: 'center' }}>Cerrar Sesion</AppText>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAMED_COLORS.darkGray
  },
  header: {
    flex: 0.07,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  userPic: {
    height: Screenheight * 0.14,
    alignItems: 'center',
    backgroundColor: NAMED_COLORS.backgroundDarkGray,
    justifyContent: 'center'
  },
  touchableOpacityStyle: {
    flex: 0.5,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    height: Screenheight * 0.08,
    backgroundColor: NAMED_COLORS.darkGray,
    marginBottom: 2,
    marginTop: 2,
    padding: 15
  },
  headingRow: {
    flexDirection: 'row',
    height: Screenheight * 0.08,
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
    fontSize: 12,
  },
  imageClick: {
    flex: 0.2,
  }
});
const mapsStateToProps = (state) => {
  return ({
    subscription: state.subscription.subscription
  })
}
export default connect(mapsStateToProps)(SettingsScreen)