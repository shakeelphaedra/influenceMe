import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity, ImageBackground, Text, StyleSheet, Dimensions } from 'react-native';
import { Spinner, BackButton, NoItem } from '../../common';
import { getInfluencerDetails } from '../../../../API';
import Plan from '../common/Card';
import ViewMoreText from 'react-native-view-more-text';
import { FONT_FAMILY, FONT_SIZE, BG_COLOR, RED_TEXT, fonts } from '../../../styles';
import { WebView } from 'react-native-webview';
import { showMessage } from 'react-native-flash-message';

screenWidth = Dimensions.get("window").width;
screenHeight = Dimensions.get("window").height;

class Details extends Component {
  currHeight = 0;
  prevHeight = 0;
  scrollHeight = 400;
  state = {
    loading: true,
    influencer: {},
    placeHolderRemove: false
  };

  componentDidMount() {
    const { navigation } = this.props;
    const influencerId = navigation.getParam('influencerId', '1');
    getInfluencerDetails(influencerId).then(({ influencers, message }) => {
      this.setState({ loading: false, influencer: influencers });
      if (message) {
        showMessage({
          message: message,
          type: 'warning'
        })
      }

    }).catch(error => {
    })
  };

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMoreStyle}>View more</Text>
    )
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={styles.viewMoreStyle}>Leer Menos ^</Text>
    )
  }

  _goToPlanDetails(id) {
    this.props.navigation.navigate('PlanDetails', {
      planId: id,
    });
  }

  _renderPlanes(plans, name) {
    if (plans.length == 0)
      return <NoItem />
    return plans.map((plan) => (
      <View style={{ marginTop: 35, height: 150 }}>
        <Plan id={plan.id} onPress={() => this._goToPlanDetails(plan.id)} name={name} titleStyle={{ fontSize: 16, marginBottom: 0, marginLeft: 22 }} typeStyle={{ fontSize: 24, marginLeft: 22, marginBottom: 4 }} subTitle={plan.title} image_url={plan.image_url ? plan.image_url.replace("http", "https") : null} />
      </View>
    ))
  }
  _scrollToBottom() {
    this.scrollHeight = screenHeight;
    this.refs.scrollView.getScrollResponder().scrollResponderScrollTo({
      x: 0,
      y: this.scrollHeight,
      animated: true
    });
  };

  removePlaceHolder() {
    that = this;
    this.setState({ placeHolderRemove: true })
  }

  showPlaceHolder() {
    that = this;
    this.setState({ placeHolderRemove: false })
  }

  _renderDetails() {
    const { loading, influencer } = this.state;
    const { background_image_url, name, video_url, plans, description } = influencer;
    if (loading)
      return <Spinner />
    return (
      <ImageBackground style={{ flex: 1, backgroundColor: BG_COLOR, position: 'relative' }} source={{ uri: background_image_url ? background_image_url.replace("http", "https") : null }}
        onLoad={this.removePlaceHolder.bind(this)}
        onError={this.showPlaceHolder.bind(this)}
      >
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', opacity: this.state.placeHolderRemove ? 0 : 1 }}>
          <Image source={require('../../../assets/www/dist/img/picture-w.png')} style={{ height: 60, width: 60, opacity: 0.7 }} />
        </View>
        <BackButton onPress={() => this.props.navigation.goBack()} />

        <ScrollView
          ref="scrollView"
          onLayout={ev => {
            // Fires once
            const fixedContentHeight = ev.nativeEvent.layout.height;
            this.prevHeight = fixedContentHeight;
          }}
        >
          <View style={{ margin: 25 }}>
            <View style={{ flex: 1, height: screenHeight - (screenHeight / 100) * 30, justifyContent: 'flex-end', marginVertical: 50 }}>
              <Text style={[{
                fontFamily: 'Esphimere',
                alignSelf: 'center', color: 'white',
                fontWeight: '500', fontSize: 35
              }, styles.shadowStyle]}>
                {name}
              </Text>
              <TouchableOpacity onPress={() => this._scrollToBottom()} style={{ marginTop: 30, alignSelf: 'center' }}>
                <Image source={require('../../../assets/icons/down-arrow1.png')} width={20} height={20} style={{ height: 60, width: 60 }} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.backgroundVideo}>
                <WebView
                  mediaPlaybackRequiresUserAction={true}
                  source={{ uri: video_url }}
                />
              </View>
            </View>
            <View style={[styles.overlay, { alignItems: 'center', marginTop: 20, padding: 3 }]}>
              <Text style={[styles.textStyle, { alignSelf: 'flex-start', marginVertical: 20, marginTop: 40, fontFamily: fonts.esp }]}>ARECA DE</Text>
              <ViewMoreText
                containerStyle={{ flexDirection: 'row' }}
                numberOfLines={6}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={[styles.textStyle, { fontFamily: fonts.esp_light }]}
              >
                {description}
              </ViewMoreText>
            </View>
            <View>
              <Text style={[{
                fontFamily: fonts.esp,
                alignSelf: 'flex-start', color: 'white',
                fontWeight: '500', fontSize: FONT_SIZE,
                marginTop: 50
              }, styles.shadowStyle]}>
                Planes
                            </Text>
              <View>
                {this._renderPlanes(plans, name)}
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        {this._renderDetails()}
      </View>
    )
  }
};

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 178,
    width: '100%',
  },
  overlay: {
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  textStyle: {
    textAlign: 'justify',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: FONT_FAMILY, fontSize: FONT_SIZE, color: 'white',
    lineHeight: 22
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
