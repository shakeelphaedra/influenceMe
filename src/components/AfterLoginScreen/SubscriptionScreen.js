import React, { Component } from 'react';
import {
  View, Dimensions, Text, ImageBackground, Alert,
  Platform,
  TouchableOpacity,
  Linking
} from 'react-native';
import { fonts } from '../../styles';
import { MyList, GreyHeaderWithBackButton, } from '../common';
import { NAMED_COLORS } from '../../common/AppColors';
import { subscriptionFeatureList, priceOfLifeTime } from '../../utils';
import { connect } from 'react-redux';
import InfoPopup from '../common/InfoPopup';
import * as actions from '../../actions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { checkSubscription, subscribeGooglePlay } from '../../../API';
import RNIap, {
  acknowledgePurchaseAndroid,
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap';
import appsFlyer from 'react-native-appsflyer';

const itemSubs = Platform.select({
  android: [
    'influenceme_premium_1'
  ],
});

let purchaseUpdateSubscription;
let purchaseErrorSubscription;

class SubscriptionScreen extends Component {
  state = {
    checked: false, mode: "", dialogVisible: false, message: "", subscribed: false, alertMessage: "", productList: [],
    receipt: '',
    availableItemsMessage: '',
    countryCode: ""
  }

  async componentDidMount() {
    this.setStates()
    try {
      const result = await RNIap.initConnection();
      console.log('result', result);
    } catch (err) {
      console.warn(err.code, err.message);
    }
    await this.getSubscriptions();
    purchaseUpdateSubscription = purchaseUpdatedListener(
      async (purchase) => {
        console.log('purchaseUpdatedListener', purchase);
        if (
          purchase.purchaseStateAndroid === 1 &&
          !purchase.isAcknowledgedAndroid
        ) {
          try {
            const ackResult = await acknowledgePurchaseAndroid(
              purchase.purchaseToken,
            );
            console.log('ackResult', ackResult);
          } catch (ackErr) {
            console.warn('ackErr', ackErr);
          }
        }
        this.setState({ receipt: purchase.transactionReceipt, subscribed: true }, () =>
          this.backendSave(),
        );
      },
    );

    purchaseErrorSubscription = purchaseErrorListener(
      (error) => {
        console.log('purchaseErrorListener', error);
        Alert.alert('Algo salió mal!');
      },
    );
  }

  componentWillUnmount() {
    if (purchaseUpdateSubscription) {
      purchaseUpdateSubscription.remove();
      purchaseUpdateSubscription = null;
    }
    if (purchaseErrorSubscription) {
      purchaseErrorSubscription.remove();
      purchaseErrorSubscription = null;
    }
  }

  backendSave = async () => {
    await subscribeGooglePlay(this.state.receipt);
    // Alert.alert("Thanks for subscribing!");
  };

  getSubscriptions = async () => {
    try {
      const products = await RNIap.getSubscriptions(itemSubs);
      console.log('Products', products);
      this.setState({ productList: products });
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  getAvailablePurchases = async () => {
    try {
      console.info(
        'Get available purchases (non-consumable or unconsumed consumable)',
      );
      const purchases = await RNIap.getAvailablePurchases();
      console.info('Available purchases :: ', purchases);
      if (purchases && purchases.length > 0) {
        this.setState({
          availableItemsMessage: `Got ${purchases.length} items.`,
          receipt: purchases[0].transactionReceipt,
        });
      }
    } catch (err) {
      console.warn(err.code, err.message);
      Alert.alert("Algo salió mal al buscar suscripciones!");
    }
  };


  requestSubscription = async (sku) => {
    try {
      RNIap.requestSubscription(sku);
    } catch (err) {
      Alert.alert("Algo salió mal!");
    }
  };

  setStates = async () => {
    checkSubscription().then(res => {
      if (res.return) {
        console.log(res)
        return this.setState({ subscribed: res.subscribed, message: res.message, mode: res.mode })
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
    const { productList, receipt, availableItemsMessage } = this.state;

    return (
      <View style={{ flex: 14, backgroundColor: 'black' }}>
        <ImageBackground style={{ flex: 14 }}>
          {/* header */}
          <GreyHeaderWithBackButton text="Subscription" navigation={this.props.navigation} />

          <View style={{ flex: 13 }}>
            {/* title */}
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 12, marginBottom: 5, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8 }}>{this.state.subscribed ? "Ya estás suscrito" : "Por favor, suscríbete!"}</Text>
              <Text style={{ fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8 }}>Suscríbete</Text>
              <Text style={{ fontSize: 35, fontFamily: fonts.esp_bold, backgroundColor: NAMED_COLORS.orangeColor, padding: 5, color: NAMED_COLORS.white, textAlign: 'center', opacity: 0.8, marginTop: 10 }}>Hoy</Text>
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
                  <View>
                    <TouchableOpacity onPress={this.subscribePlan.bind(this)}>
                      <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: NAMED_COLORS.orangeColor, width: screenWidth * 0.89, padding: 13, borderColor: NAMED_COLORS.orangeColor, borderWidth: 1 }}>
                        <Text style={[styles.textStyle]}>Pague a través de DCB</Text>
                        {/* <Text style={styles.textStyle}>${priceOfLifeTime}</Text> */}
                      </View>
                    </TouchableOpacity>
                    {
                      productList && productList.length >= 1 ?
                        < TouchableOpacity
                          onPress={() =>
                            this.requestSubscription(productList[0].productId)
                          }
                        >
                          <View style={{ marginHorizontal: 10, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: NAMED_COLORS.orangeColor, width: screenWidth * 0.89, padding: 13, borderColor: NAMED_COLORS.orangeColor, borderWidth: 1 }}>
                            <Text style={[styles.textStyle]}>Pague a través de Google</Text>
                          </View>
                        </TouchableOpacity> : null
                    }
                  </View>
                  :
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        if (!(Platform.OS === 'ios') && this.state.mode && this.state.mode === "google_play") {
                          Linking.openURL('https://play.google.com/store/account/subscriptions?package=com.influenceme&sku=influenceme_premium_1')
                        }
                      }}>
                      <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: NAMED_COLORS.orangeColor, width: screenWidth * 0.89, padding: 13, borderColor: NAMED_COLORS.orangeColor, borderWidth: 1 }}>
                        <Text style={[styles.textStyle]}>Cancelar suscripción</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              }

            </View>
            <InfoPopup visible={this.state.dialogVisible} tick={false} yesHandler={this.noHandler} yesButtonText="OK" heading="" description={this.state.alertMessage} />
          </View>
        </ImageBackground>
      </View >
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