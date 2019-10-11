import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { NAMED_COLORS } from '../../common/AppColors';
import settingImage from '../../assets/www/dist/img/settings-outline.png'
import Icon from '../common/Icon';
import { fonts, commonStyle, BG_COLOR } from '../../styles';
import { getProfileDetails, BASE_URL } from '../../../API';
import { showMessage } from 'react-native-flash-message';
import InfoPopup from '../common/InfoPopup';
import { checkSubscription } from '../../../API';



import { withNavigationFocus } from 'react-navigation';

class ProfileScreen extends Component {
  state = {
    actualPlan: {},
    previousPlans: [],
    subscribed: false,
    dialogVisible: false
  }
  componentWillMount() {
    this.setStates()
  }

  navigateToSubscription = () => {
    this.setState({ dialogVisible: false });
    this.props.navigation.navigate("SubscriptionScreen");
  }
  noHandler = () => {
    this.setState({ dialogVisible: false });
  }
  setStates() {
    getProfileDetails().then(res => {
      if (res.return) {
        return this.setState({ actualPlan: res.current_plan, previousPlans: res.previous_plans })
      } else {
        showMessage({
          message: res.message,
          type: 'danger'
        })
      }
    });
    checkSubscription().then(res => {
      if (res.return) {
        if (!res.subscribed) {
          this.setState({ dialogVisible: true })
        }
        return this.setState({ subscribed: res.subscribed })
      }
    })
  }
  _renderActualPlan(plan) {
    if (plan && plan.title) {
      return (
        <View style={{ height: 200, borderTopColor: BG_COLOR, borderTopWidth: 1 }}>
          <View style={styles.backgroundImageContainerStyle} >
            <ImageBackground
              style={{ width: '100%', height: '100%', }}
              source={{ uri: plan.image_url ? plan.image_url.replace("http", "https") : null }}
            >
              <View style={styles.boxShadow}>
                <Text style={{ fontFamily: fonts.esp, fontSize: 70, color: 'white', opacity: 0.5 }}>{Math.round(plan.percentage)} %</Text>
                <View style={{ position: 'relative', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Text style={[styles.titleStyle]}>{plan.title}</Text>
                  <Text style={[styles.descriptionStyle]} numberOfLines={1}>{plan.description}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      )
    }

  }
  render() {
    const { settingsClick } = this.props;
    return (
      <View style={styles.container}>
        {/*  =======   header container  ======*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={settingsClick} style={styles.touchableOpacityStyle}>
            <Icon name='uniF214' color='white' size={30} />
          </TouchableOpacity>
          <Text style={{ color: NAMED_COLORS.white, fontFamily: fonts.esp, fontSize: 15 }}>Perfil</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("FAQ")}
            underlayColor={'#444444'}
          >
            <Icon name='uniF19E' color='white' size={30} />
          </TouchableOpacity>
        </View>
        <View style={[{ height: 100, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }]}>
          <View style={{ width: 100 }}>
            <Image source={require('../../assets/www/dist/img/Icono-blanco.png')} style={{ height: 70, width: 70 }} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: fonts.esp, color: 'white', paddingVertical: 10, marginRight: 40, alignSelf: 'flex-start' }}>Test</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 40 }}>
                <Icon name='uniF12B' color='white' size={20} />
              </View>
              <Text style={{ fontFamily: fonts.esp_light, color: 'white', }}>InfluenceMe</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{}}>
          <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: fonts.esp, color: 'white' }}>Plan Actual</Text>
          </View>
          {this._renderActualPlan(this.state.actualPlan)}

          <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: fonts.esp, color: 'white' }}>Plan Anterior</Text>
          </View>
          {this.state.previousPlans.map(plan => {
            return this._renderActualPlan(plan)
          })}
          {/* {this.setStates()} */}
        </ScrollView>
        <InfoPopup visible={this.state.dialogVisible} tick={false} yesHandler={this.navigateToSubscription} noHandler={this.noHandler} yesButtonText="Si" noButtonText="no" heading="" description={`Su plan actual está a punto de finalizar. ¿Te gustaría seguir usando Influence Me?`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAMED_COLORS.darkGray,
  },
  backgroundImageContainerStyle: {
    backgroundColor: '#A4A4A4',
    color: '#A7A7A7'
  },
  boxShadow: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  titleStyle: {
    zIndex: 2,
    fontSize: 14,
    marginBottom: 10,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    color: 'white',
    opacity: 0.8
  },
  descriptionStyle: {
    zIndex: 2,
    fontSize: 20,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    marginBottom: 20,

    color: 'white',
    opacity: 0.8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    height: 40,
    paddingRight: 15,
    alignItems: 'center'
  },
  headerBottom: {
    flex: 0.18,
  },
  touchableOpacityStyle: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.esp_light
  },
  activeTitle: {
    color: 'red',
  },
});

export default withNavigationFocus(ProfileScreen)