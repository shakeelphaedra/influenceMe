import { AsyncStorage } from 'react-native';

export const authState = { flag: 'do', countryCode: '+1', influencer: 'Altice', phone: '', confirmResult: {}, message: "", confirmCode: '', loading: false }
export const sliderState = [
  {
    key: 'somethun',
    title: 'InfluenceMe',
    text: 'Entrena usando las runtinas personales de tus influencers Favoritors.',
    image: require('../assets/www/dist/img/influencers.jpg'),
    logo: require('../assets/www/dist/img/Icono-blanco.png'),
    logo2: require("../assets/www/dist/img/Logo-blanco-sin.png"),
    buttonColor: '#d75019',
    color: 'white'
  },
  {
    key: 'somethun1',
    title: 'ENTRENA',
    text: 'Elige tu nivel de resistencia y professionaliza tu rutina.',
    image: require('../assets/www/dist/img/influencer_yarishna.jpg'),
    buttonColor: '#1a1a1a',
    color: '#d75019'
  },
  {
    key: 'somethun1',
    title: 'EXPLORA',
    text: 'Existe un plan para cada una de las áreas que deseas trabajar.',
    image: require('../assets/www/dist/img/influencer_alex.jpg'),
    buttonColor: '#d75019',
    color: 'white'
  }
]
export const priceOfLifeTime = 99;
export const username = "kyle@miwifi.co";
export const description = "Monthly Subscription";

export const subscriptionFeatureList = [
  { icon: "uniF239", text: "UNBLOCK ALL WORKOUTS" },
  { icon: "uniF239", text: "BUILT IN COACH GUIDANCE" },
  { icon: "uniF239", text: "ACHEIVE BETTER RESULTS" },
  { icon: "uniF239", text: "PREMIUM TRAININ ADVICES" },
  { icon: "uniF239", text: "REACH YOUR GOAL FASTER" },
]

export const BASE_URL = "https://288cc1fe.ngrok.io/";

export const returnUrl = `${BASE_URL}return`;
export const notifyUrl = `${BASE_URL}notify`;
export const cancelUrl = `${BASE_URL}cancel`;
export const apiKey = "IfNatsXFy1kVI7GxFhc9wHP3"

export const subscription = { subscription: getValue() };
export const confirmResult = {};
export const influencerList = [{ value: 'Altice' }, { value: 'Claro' }, { value: 'Viva' }];
export const countryCodeList = [{ value: '+92' }, { value: '+1', flag: 'do' }, { value: '+57', flag: 'co' }, { value: '+58', flag: 've' }]

async function getValue() {
  try {
    const userToken = await AsyncStorage.getItem('subscription');
    return userToken;
  } catch (error) {
    showError(error);
  }
}
console.log('vggggggooioio', getValue())