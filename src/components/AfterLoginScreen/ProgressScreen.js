import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView,RefreshControl } from 'react-native';
import { BlackButton, Spinner } from '../common';
import { fonts, commonStyle } from '../../styles';
import { getProgressDetails } from '../../../API';
import { showMessage, hideMessage } from "react-native-flash-message";
import { NAMED_COLORS } from '../../common/AppColors';
import Share from 'react-native-share';
screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class ProgressScreen extends Component {
  state = {
    loading: false,
    background_image: '',
    current_plan: '',
    days: '',
    exercise: '',
    influencer: '',
    plan: '',
    refreshing: false,
    time: '',
    id: '',
    total: ''
  }
  goToPlan = () => {
    this.props.navigation.push("PlanDetails",{planId: this.state.id})
  }
  shareScreen = () =>{ 
    message = `Estoy en influenceMe. Revisa mis puntajes.${'\n'}Plan ${this.state.plan}${'\n'}Dias Completados: ${this.state.days}${'\n'}Total Time: ${this.state.time}${'\n'}Timepo Ejecicios: ${this.state.exercise}${'\n'}${this.state.total}
    `
    const shareOptions = {
      title: 'Share via',
      message: message,
      url: 'http//influenceme.herokuapp.com',
    };
    Share.open(shareOptions).then(()=>console.log('success')).catch(e=> console.log('eeerrr',e))
  
  }
  componentDidMount() {
    this.setState({ loading: true })
    getProgressDetails(1).then((res) => {
      if(res.return){
        this.setState({
          background_image: res.background_image,
          current_plan: res.current_plan,
          days: res.days,
          exercise: res.exercise,
          influencer: res.influencer,
          plan: res.plan,
          time: res.time,
          total: res.total,
          id: res.id,
          loading: false
        })
      }else{
        showMessage({
          message: res.message,
          type: 'danger',
          backgroundColor: NAMED_COLORS.orangeColor,
        })
      }
    })
  }

  _onRefresh  = () => {
    that = this;
    getProgressDetails(1).then((res) => {
      if(res.return){
        this.setState({
          background_image: res.background_image,
          current_plan: res.current_plan,
          days: res.days,
          exercise: res.exercise,
          influencer: res.influencer,
          plan: res.plan,
          time: res.time,
          total: res.total,
          id: res.id,
          loading: false,
          refreshing: false
        })
      }else{
        showMessage({
          message: res.message,
          type: 'danger',
          backgroundColor: NAMED_COLORS.orangeColor,
        })
      }
    })
  }

  inviteUser() {
    const shareOptions = {
      title: 'Share via',
      message: 'Hola, esta aplicación es increíble, vamos a pagar juntos por desafíos',
      url: 'http//influenceme.herokuapp.com',
    };
    Share.open(shareOptions).then(()=>console.log('success')).catch(e=> console.log('eeerrr',e))
  }

  render() {
    const {
      background_image,
      current_plan,
      days,
      exercise,
      influencer,
      loading,
      plan,
      time,
      total
    } = this.state;
    if (loading)
      return <Spinner size="large" />
    return (
      <ImageBackground style={{ width: screenWidth, backgroundColor: 'black' }} source={{ uri: background_image }}>
        <ScrollView 
        
        refreshControl={
          <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
          />
        }
        >
          <View style={{ height: screenHeight / 3, alignItems: 'center', justifyContent: 'center', marginTop: screenHeight * 0.1 }}>
            <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 18 }]}>{influencer}</Text>
            <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 30 }]}>{plan}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 30 }]}>{total.split(' ')[0] + ' ' + total.split(' ')[1]}</Text>
            <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 18 }]}>{total.split(' ')[2]}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: screenHeight * 0.05 }}>
            <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp, fontSize: 18 }]}>
              {current_plan}
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: screenHeight * 0.05, width: '100%' }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', padding: 10 }}>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp, fontSize: 13 }]}>Dias Completados: </Text>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 13 }]}>{days}</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between', marginTop: screenHeight * 0.01, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp, fontSize: 13 }]}>Total Time: </Text>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 13 }]}>{time}</Text>
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp, fontSize: 13 }]}>Timepo Ejecicios: </Text>
                <Text style={[commonStyle.shadowText, { color: 'white', fontFamily: fonts.esp_light, fontSize: 13 }]}>{exercise}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: screenHeight * 0.05 }}>
            <BlackButton onPress={this.shareScreen} color="white" textSize={12} fontFamily={fonts.esp_light} backgroundColor="#d75019" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }} >COMPACTOR</BlackButton>
            <BlackButton onPress={this.inviteUser.bind(this)} color="#d75019" textSize={12} fontFamily={fonts.esp_light} backgroundColor="#1a1a1a" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }}>INVITAR</BlackButton>
          </View>
          <View style={{ marginTop: 20 }}>
            <BlackButton color="#d75019" textSize={12} fontFamily={fonts.esp_light} backgroundColor="white" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }} onPress={this.goToPlan}>RUTINAS DEL PLAN</BlackButton>
          </View>
        </ScrollView>
      </ImageBackground>

    )
  }
}

export default ProgressScreen