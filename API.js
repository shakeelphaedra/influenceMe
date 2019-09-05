import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { NAMED_COLORS } from './src/common/AppColors';
const BASE_URL = "https://influenceme.herokuapp.com"
// const BASE_URL = "http://localhost:3000/"
const API_URL = BASE_URL + '/api/v1';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const getInfluencersURL = "/influencers/list";
const getInfluencerURL = "/influencers/";
const getPlansURL = '/plans';
const getDaysURL = "/days/user_id";
const searchInfluencerURL = "/search/influencer/";
const searchPlanURL = "/search/plan/";
const getExercisesURL = "/exercises";

async function getInfluencers() {
  try {
    const response = await axios.get(getInfluencersURL);
    var data = response.data
    var influencers = data.influencers
    return influencers;
  } catch (error) {
    showError(error);
  }
}

async function getInfluencerDetails(id) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get(getInfluencerURL + id+"?user_id="+userToken);
    var data = response.data
    return data;
  } catch (error) {
    showError(error);
  }
}
async function getPlans() {
  try {
    const response = await axios.get(getPlansURL);
    var data = response.data
    var plans = data.plans
    return plans;
  } catch (error) {
    showError(error);
  }
}

async function getPlanDetails(id) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get(getPlansURL+"/user_id/"+ id+"?user_id="+userToken);
    var data = response.data
    return {plan: data.plans, plan_days: data.plan_days, currentPlan: data.current_plan};
  } catch (error) {
    showError(error);
  }
}

async function getDayDetails(id) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get(getDaysURL +"/"+ id+ "?user_id="+userToken);
    var data = response.data
    return data.days;
  } catch (error) {
    showError(error);
  }
}
async function getExerciseDetails(id) {
  try {
    const response = await axios.get(getExercisesURL +"/"+ id);
    var data = response.data
    return data;
  } catch (error) {
    showError(error);
  }
}

async function searchInfluencers(text) {
  try {
    const response = await axios.get(searchInfluencerURL +"/"+ text);
    var data = response.data
    return data.influencers;
  } catch (error) {
    showError(error);
  }
}


async function searchPlans(text) {
  try {
    const response = await axios.get(searchPlanURL +"/"+ text);
    var data = response.data
    return data.plans;
  } catch (error) {
    showError(error);
  }
}

async function createUser(params) {
  try {
    let data = {user_id: params.uid, phone_number: params.phoneNumber, email: params.email}
    const response = await axios.post("/users", data);
    let data1 = response.data
    return data1
  } catch (error) {
    showError(error);
  }
}

async function startDay(dayId) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get("/days/start/"+ userToken+"/"+ dayId);
    let data1 = response.data
    return data1
  } catch (error) {
    showError(error);
  }
}

async function completeDay(dayId) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get("/days/complete/"+ userToken+"/"+ dayId);
    let data1 = response.data
    return data1
  } catch (error) {
    showError(error);
  }
}

async function getProgressDetails(planId) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get("/plans/progress/"+ userToken);
    let data = response.data
    return data
  } catch (error) {
    showError(error);
  }
}

async function changeCurrentPlan(planId) {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get("/plans/change_current_plan/"+ planId+"/"+ userToken);
    let data = response.data
    return data
  } catch (error) {
    showError(error);
  }
}

async function getFAQs() {
  try {
    const response = await axios.get("/faqs");
    let data = response.data
    return data.faqs
  } catch (error) {
    showError(error);
  }
}

async function getProfileDetails() {
  try {
    const userToken = await AsyncStorage.getItem('userId');
    const response = await axios.get("/users/profile/"+userToken);
    let data = response.data
    return data
  } catch (error) {
    showError(error);
  }
}

export const showError = (error) => {
  showMessage({
    message: error.message,
    type: 'danger',
    backgroundColor: NAMED_COLORS.orangeColor
  })
}

export {
    getInfluencers,
    BASE_URL, 
    getFAQs,
    API_URL, 
    getInfluencerDetails,
    getPlans, 
    getPlanDetails, 
    getDayDetails, 
    getProfileDetails,
    getExerciseDetails, 
    searchInfluencers,
    changeCurrentPlan,
    searchPlans, 
    createUser,
    startDay, 
    completeDay,
    getProgressDetails
  }