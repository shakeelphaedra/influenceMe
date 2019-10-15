import React, { Component } from 'react';
import { View, Image, Dimensions, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { fonts } from '../../styles';
import { CheckBox } from 'react-native-elements';
import { BlackButton, MyList, GreyHeaderWithBackButton, } from '../common';
import Icon from '../common/Icon';
import { NAMED_COLORS } from '../../common/AppColors';
import { subscriptionFeatureList, priceOfLifeTime } from '../../utils';
import { connect } from 'react-redux';
import InfoPopup from '../common/InfoPopup';
import * as actions from '../../actions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { checkSubscription } from '../../../API';
import appsFlyer from 'react-native-appsflyer';

const options = {
  devKey: "hvXJ8HBe9HJhw8Ag28YhcY",
  isDebug: true
};

if (Platform.OS === 'ios') {
  options.appId = "123456789";
}

appsFlyer.initSdk(options,
  (result) => {
    console.log(result);
  },
  (error) => {
    console.error(error);
  }
)


class SubscriptionScreen extends Component {
  state = {
    checked: false, dialogVisible: false, message: "", subscribed: false, alertMessage: ""
  }

  componentDidMount() {
    this.setStates()
  }

  setStates = () => {
    checkSubscription().then(res => {
      if (res.return) {
        console.log(res)
        return this.setState({ subscribed: res.subscribed, message: res.message })
      }
    })
  }
  renderItems() {
    return subscriptionFeatureList.map(item => {
      return <MyList icon={item.icon} text={item.text} />
    })
  }
  noHandler = () => {
    this.setState({ dialogVisible: false })
  }

  _onSubscription(message, subscribed) {
    this.setState({ subscribed: subscribed, message: subscribed ? "subscribed" : "new", alertMessage: message, dialogVisible: true })
  }

  subscribePlan() {
    this.TrackSubscriptionEvent();
    this.props.navigation.navigate("SubscriptionPaymentScreen", {
      callBack: (ref, subscribed) => this._onSubscription(ref, subscribed)
    })
  }

  TrackSubscriptionEvent() {
    const eventName = "af_subscription";
    const eventValues = {
      "af_event_param2": "bizbuz"
    };
    appsFlyer.trackEvent(eventName, eventValues,
      (result) => {
        console.log(eventName);
        console.log(eventValues);
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 14, backgroundColor: 'black' }}>
        <ImageBackground style={{ flex: 14 }}>
          {/* header */}
          <GreyHeaderWithBackButton text="Subscription" navigation={this.props.navigation} />

          <View style={{ flex: 13 }}>
            {/* title */}
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 12, marginBottom: 5, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8 }}>{this.state.subscribed ? "You are already subscribed" : "Please subscribe!"}</Text>
              <Text style={{ fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8 }}>GO</Text>
              <Text style={{ fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8, marginTop: 10 }}>PREMIUM</Text>
            </View>
            {/* title */}

            {/* features */}
            <View style={{ flex: 5, alignItems: 'center' }}>
              <View>
                {this.renderItems()}
              </View>
            </View>
            {/* features */}

            {/* subscriptions list */}
            <View style={{ flex: 4, zIndex: 6, alignItems: 'center' }}>
              {
                !this.state.subscribed ?
                  <TouchableOpacity onPress={this.subscribePlan.bind(this)}>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: NAMED_COLORS.orangeColor, width: screenWidth * 0.89, padding: 13, borderColor: NAMED_COLORS.orangeColor, borderWidth: 1 }}>
                      <Text style={[styles.textStyle]}>Lifetime</Text>
                      <Text style={styles.textStyle}>${priceOfLifeTime}</Text>
                    </View>
                  </TouchableOpacity>
                  : <TouchableOpacity>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: NAMED_COLORS.orangeColor, width: screenWidth * 0.89, padding: 13, borderColor: NAMED_COLORS.orangeColor, borderWidth: 1 }}>
                      <Text style={[styles.textStyle]}>Subscribed</Text>
                    </View>
                  </TouchableOpacity>
              }
            </View>
            <InfoPopup visible={this.state.dialogVisible} tick={false} yesHandler={this.noHandler} yesButtonText="OK" heading="" description={this.state.alertMessage} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 1,
    marginTop: -screenHeight / 5
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.esp
  },
  containerStyle: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 888,
    justifyContent: 'center'
  }
}

const mapStatsToProps = (state) => {
  return {
    subscription: state.subscription.subscription,
  }
}

export default connect(mapStatsToProps, actions)(SubscriptionScreen);