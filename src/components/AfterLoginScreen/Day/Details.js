import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Spinner, BackButton, BlackButton, NoItem } from '../../common';
import { BG_COLOR, fonts, commonStyle } from '../../../styles';
import { BASE_URL, startDay, completeDay } from '../../../../API';
import InfoPopup from '../../common/InfoPopup';
screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class Details extends Component {
  constructor(props) {
    super(props);
    this.day = props.day.day;
    this.status = props.day;
    this.state = {
      start: props.day.start,
      complete: props.day.complete,
      dialogVisible: false,
      borderBottomWidth: 1, text: '',
      dialogCheckVisiable: false
    }
  }
  
  submitFinialize = () => {
    this.setState({ dialogVisible: false });
    completeDay(this.day.id).then(res => {
      this.setState({ complete: true, dialogCheckVisiable: true, })
    })
  }

  showDialog = () => {
    this.setState({ dialogVisible: true })
  }

  noHandler = () => {
    this.setState({ dialogVisible: false, dialogCheckVisiable: false });
  }
  _startDay() {
    startDay(this.day.id).then(res => {
      this.setState({ start: true })
    })
  }
  _endDay = () => {
    completeDay(this.day.id).then(res => {
      this.setState({ start: false, dialogCheckVisiable: true })
    })
  }
  _renderButton() {
    if(!this.state.complete){
      if (this.state.start) {
        return <BlackButton style={{ width: screenWidth * 0.8, height: 55, justifyContent: 'center' }} color={'white'} backgroundColor={'#fd451e'} textStyle={{ fontSize: 24, fontFamily: fonts.esp_light }} onPress={this.showDialog}>FINALIZAR RUTINA</BlackButton>
      } else {
        return <BlackButton style={{ width: screenWidth * 0.8, height: 55, justifyContent: 'center' }} color={'white'} backgroundColor={'#fd451e'} textStyle={{ fontSize: 24, fontFamily: fonts.esp_light }} onPress={this._startDay.bind(this)}>EMPREZAR</BlackButton>
      }
    }
    return null
  }
  renderExercises(exercises) {
    day = this.day
    count = exercises.length
    if(count == 0)
      return <NoItem/>
    return exercises.map((exercise, index) => {
      return (
        <TouchableHighlight onPress={() => this.props.navigation.push("DayExercise", { exerciseId: exercise.id, count: count, index: index + 1 })}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#1A1A1A', paddingTop: 25, paddingBottom: 20, borderBottomColor: BG_COLOR, borderBottomWidth: 1 }}>
            <View style={{ height: 55, width: 110 }}><Image source={{ uri: exercise.thumbnail }} style={{ height: '100%', width: '100%', marginRight: 10 }} /></View>
            <View style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
              <Text style={[{ color: 'white', overflow: 'visible', fontFamily: fonts.esp, fontSize: 16, width: screenWidth * 2 / 3, paddingRight: 20 }, commonStyle.shadowText]} >{exercise.title}</Text>
              <Text style={[{ color: 'white', fontFamily: fonts.esp_light, fontSize: 16 }, commonStyle.shadowText]}>{exercise.series_count}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    })

  }
  render() {
    const day = this.day;
    return (
      <View style={{ height: screenHeight, backgroundColor: 'black' }}>
        <ScrollView>
          <View style={{ backgroundColor: BG_COLOR, height: 55 }}>
            <BackButton buttonStyle={{ marginTop: 10 }} onPress={() => this.props.navigation.goBack()}>
              <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12, marginTop: 20, marginRight: 10 }, commonStyle.shadowText]}>Resumen del Entrenameinto</Text>
            </BackButton>
          </View>
          <View style={{ height: 180 }}>
            <Image source={{ uri: BASE_URL + day.image_url }} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: BG_COLOR, height: 40 }}>
            <Text style={[{ color: 'white', fontFamily: fonts.esp, fontSize: 12 }, commonStyle.shadowText]}> Ejecicios</Text>
          </View>
          {this.renderExercises(day.exercises)}
        </ScrollView>
        <View style={{ marginTop: 30, position: 'absolute', bottom: 85, zIndex: 333, alignSelf: 'center' }}>
          {this._renderButton()}
        </View>
        <View>
          <InfoPopup visible={this.state.dialogVisible} tick={false} endDay={this._endDay} yesHandler={this.submitFinialize} noHandler={this.noHandler} yesButtonText="Si" noButtonText="no" heading="¿Desea finalizar la rutina?" />
          <InfoPopup visible={this.state.dialogCheckVisiable} tick={true} yesHandler={this.noHandler} yesButtonText="OK" heading="¡Entrenamiento Finalizado!" description="¡Muy bien, terminaste el entrenamiento del días de hoy!" />
        </View>
      </View>
    )
  }
};

var styles = StyleSheet.create({

});

export default Details;
