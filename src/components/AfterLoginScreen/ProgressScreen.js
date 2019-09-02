import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { BlackButton, Spinner } from '../common';
import { fonts, commonStyle } from '../../styles';
import { getProgressDetails } from '../../../API';
import { showMessage, hideMessage } from "react-native-flash-message";
import { NAMED_COLORS } from '../../common/AppColors';

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
    time: '',
    total: ''
  }
  componentDidMount() {
    this.setState({ loading: true })
    getProgressDetails(1).then(({
      background_image,
      current_plan,
      days,
      exercise,
      influencer,
      plan,
      time,
      total
    }) => {
      this.setState({
        background_image,
        current_plan,
        days,
        exercise,
        influencer,
        plan,
        time,
        total,
        loading: false
      })
    })
  }
  inviteUser() {
    showMessage({
      message: "Abriendo app de mensajería",
      backgroundColor: NAMED_COLORS.orange,
      type: "danger",
    });
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
        <ScrollView>
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
            <BlackButton color="white" textSize={12} fontFamily={fonts.esp_light} backgroundColor="#d75019" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }} >COMPACTOR</BlackButton>
            <BlackButton onPress={this.inviteUser.bind(this)} color="#d75019" textSize={12} fontFamily={fonts.esp_light} backgroundColor="#1a1a1a" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }}>INVITAR</BlackButton>
          </View>
          <View style={{ marginTop: 20 }}>
            <BlackButton color="#d75019" textSize={12} fontFamily={fonts.esp_light} backgroundColor="white" style={{ width: screenWidth / 3 + 30, paddingVertical: 15, paddingHorizantal: 15 }}>RUTINAS DEL PLAN</BlackButton>
          </View>
        </ScrollView>
      </ImageBackground>

    )
  }
}

export default ProgressScreen