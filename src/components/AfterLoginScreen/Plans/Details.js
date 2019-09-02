import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Spinner, BackButton, NoItem } from '../../common';
import Day from '../common/Card';
import { WebView } from 'react-native-webview';
import { FONT_FAMILY, FONT_SIZE, SCREEN_BG_COLOR, RED_TEXT, fonts } from '../../../styles';
import InfoPopup from '../../common/InfoPopup';
screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class Details extends Component {
  currHeight = 0;
  prevHeight = 0;
  scrollHeight = 400;
  state = {
    dialogVisible: true
  }
  _endDay = () =>{ 

  }
  noHandler = () => {
    this.setState({dialogVisible: false})
    console.log('no')
  }
  yesHandler = () => {
    console.log('yes')
    this.setState({dialogVisible: false})
  }
  _scrollToBottom() {
    this.scrollHeight = screenHeight;
    this.refs.scrollView.getScrollResponder().scrollResponderScrollTo({
      x: 0,
      y: this.scrollHeight,
      animated: true
    });
  }
  _goToDayDetails(dayId) {
    this.props.navigation.push("DayDetails", {
      dayId: dayId
    })
  }
  _renderDays(days, name) {
    if (days.length == 0)
      return <NoItem />
    return days.map((obj) => {
      const imageUrl =  obj.day ? obj.day.image_url : null;
      const dayOrder =  obj.day ? obj.day.day : null;
      const dayId =  obj.day ? obj.day.id : null;
      return (
        <View style={{ height: 170 }} key={obj.id}>
          <Day id={obj.id} name={'Dia ' + dayOrder} locked={obj.locked} onPress={() => this._goToDayDetails(dayId)} titleStyle={{ fontSize: 13, marginBottom: 0, textShadowRadius: 0, alignSelf: 'center', marginBottom: 10, fontFamily: fonts.esp_light }} typeStyle={{ fontSize: 14, textShadowRadius: 0, alignSelf: 'center', marginBottom: 4, fontFamily: fonts.esp_bold }} subTitle={name} image_url={imageUrl} />
        </View>
      )
    }

    )
  }
  render() {
    const { loading, plan, navigation } = this.props;
    const { title, description, level, plan_video, plan_type, location, influencer, plan_times, plan_days, plan_minutes } = plan;
    if (loading)
      return <Spinner />
    return (
      <View style={{ flex: 1, backgroundColor: SCREEN_BG_COLOR }}>
        <BackButton onPress={() => navigation.goBack()} />
        <ScrollView
          ref="scrollView"
          onLayout={ev => {
            // Fires once
            const fixedContentHeight = ev.nativeEvent.layout.height;
            this.prevHeight = fixedContentHeight;
          }}
        >
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
              <Text style={styles.textStyle}>Resumen del plan</Text>
              <View style={styles.backgroundVideo}>
                {/* <Video source={require('../../../assets/a.mp4')}   // Can be a URL or a local file.
                                    ref={(ref) => {
                                        this.player = ref
                                    }}                                      // Store reference
                                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                                    onError={this.videoError}  
                                    style={styles.backgroundVideo} />
                                 */}
                <WebView
                  mediaPlaybackRequiresUserAction={true}
                  source={{ uri: plan_video }}
                />
              </View>
              <Text style={[styles.textStyle, { marginTop: 8 }]}>{influencer.name}</Text>
              <Text style={[styles.textStyle, { marginVertical: 12, fontSize: 15, fontFamily: fonts.esp }]}>{title}</Text>
              <Text style={[styles.textStyle, { marginBottom: 3 }]}>{plan_times} | {plan_days} | {plan_minutes}</Text>
              <Text style={[styles.textStyle, { lineHeight: 14, textAlign: 'justify', fontFamily: fonts.esp_extraLight }]}>{description}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', borderColor: 'white', borderWidth: 1, borderBottomWidth: 0 }}>
              <View style={{ justifyContent: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, fontWeight: '400' }]}>NIVEL</Text>
              </View>
              <View style={{ justifyContent: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, fontWeight: '400' }]}>TIPO</Text>
              </View>
              <View style={{ justifyContent: 'center', marginHorizontal: 25, marginVertical: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, fontWeight: '400' }]}>UBICACION</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'white', borderWidth: 1 }}>
              <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: 10, marginLeft: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, alignSelf: 'center', fontFamily: fonts.esp_extraLight }]}>{level}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, alignSelf: 'center', fontFamily: fonts.esp_extraLight }]}>{plan_type}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: 10 }}>
                <Text style={[styles.textStyle, { fontSize: 12, alignSelf: 'center', fontFamily: fonts.esp_extraLight, marginRight: 10 }]}>{location}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => this._scrollToBottom()} style={{ marginTop: 15, alignSelf: 'center' }}>
                <Image source={require('../../../assets/icons/down-arrow1.png')} width={20} height={20} style={{ height: 60, width: 60 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 45, width: '100%' }}>
            <Text style={[styles.textStyle, { marginTop: 30 }]}>Rutinas del Plan</Text>
            <View style={{ flex: 1, width: '100%', marginTop: 30 }}>
              {this._renderDays(this.props.plan_days, title)}
            </View>
          </View>
          <InfoPopup visible={this.state.dialogVisible} tick={false} endDay={this._endDay} yesHandler={this.yesHandler} noHandler={this.noHandler} yesButtonText="Si" noButtonText="no" heading="¿Desea cambiar de plan?" description={`Al aceptar su plan actual pasa a${'\n'}estado inactivo, solo se puede${'\n'}realizar una vez al día.`}/>
        </ScrollView>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 178,
    marginTop: 10,
    width: '100%',
  },
  textStyle: {
    textAlign: 'justify',
    textShadowColor: 'black',
    color: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontWeight: '600',
    fontFamily: FONT_FAMILY,
    fontSize: 10,
    color: 'white',
    lineHeight: 20
  },
  viewMoreStyle: {
    color: RED_TEXT,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: FONT_SIZE, fontFamily: FONT_FAMILY, fontWeight: '500'
  },
  shadowStyle: {
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  }
});

export default Details;