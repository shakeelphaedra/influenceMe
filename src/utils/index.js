import { AsyncStorage } from 'react-native';

export const authState = { flag: 'do', countryCode: '', influencer: 'Altice', phone: '', confirmResult: {}, message: "", confirmCode: '', loading: false }
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
    text: 'Elige tu nivel de resistencia y profesionaliza tu rutina.',
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
export const description = "Suscripción mensual";

export const subscriptionFeatureList = [
  { icon: "uniF239", text: "Desbloquea todos los ejercicios" },
  { icon: "uniF239", text: "Guía de entrenamiento interactivo" },
  { icon: "uniF239", text: "Logra mejores resultados" },
  { icon: "uniF239", text: "Consejos de entrenamiento premium" },
  { icon: "uniF239", text: "Alcanza tu objetivo más rápido" },
]

export const BASE_URL = "https://influenceme.herokuapp.com/";
export const PRODUCT_ID = "influenceme_premium_1";

export const returnUrl = `${BASE_URL}return`;
export const notifyUrl = `${BASE_URL}notify`;
export const cancelUrl = `${BASE_URL}cancel`;
export const apiKey = "IfNatsXFy1kVI7GxFhc9wHP3"

export const subscription = { subscription: getValue() };
export const confirmResult = {};
export const influencerList = [
  { country: "+56", telcos: [{ value: 'Entel' }, { value: 'Claro CL' }, { value: 'Moviestar' }] },
  { country: "+57", telcos: [{ value: 'Movistar' }, { value: 'Tigo' }, { value: 'Comcel' }] },
  { country: "+34", telcos: [{ value: 'Movistar' }, { value: 'Orange' }, { value: 'Vodafone' }] },
  { country: "+51", telcos: [{ value: "America Movil Peru" }, { value: "Claro PE" }] },
  { country: "+52", telcos: [{ value: "AT&T MX" }, { value: "Telcel" }] }
];

// export const influencerList = [
//   { value: 'Altice' }, { value: 'Claro CL' }, { value: 'Moviestar' }];

export const countryCodeList = [
  { value: '+92' },
  { value: '+1', flag: 'do' },
  { value: '+52', flag: 'mx' },
  { value: '+505', flag: 'ni' },
  { value: '+507', flag: 'pa' },
  { value: '+51', flag: 'pe' },
  { value: '+34', flag: 'es' },
  { value: '+598', flag: 'uy' },
  { value: '+58', flag: 've' },
  { value: '+504', flag: 'hn' },
  { value: '+502', flag: 'gt' },
  { value: '+503', flag: 'sv' },
  { value: '+809', flag: 'do' },
  { value: '+506', flag: 'cr' },
  { value: '+57', flag: 'co' },
  { value: '+56', flag: 'cl' },
  { value: '+591', flag: 'bo' },
  { value: '+501', flag: 'bz' },
]

export const pricePoints = [
  { countryCode: "+56", price: 90000, code: "CLP" },
  { countryCode: "+34", price: 726, code: "EUR" },
  { countryCode: "+57", price: 368900, code: "COP" }
]

async function getValue() {
  try {
    const userToken = await AsyncStorage.getItem('subscription');
    return userToken;
  } catch (error) {
    showError(error);
  }
}
console.log('vggggggooioio', getValue())