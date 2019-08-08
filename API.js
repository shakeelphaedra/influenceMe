import axios from 'axios';
const BASE_URL = "https://influenceme-backend.herokuapp.com"
const API_URL = BASE_URL + '/api/v1';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const getInfluencersURL = "/influencers/list";
const getInfluencerURL = "/influencers/";
const getPlansURL = '/plans';

async function getInfluencers() {
  try {
    const response = await axios.get(getInfluencersURL);
    var data = response.data
    var influencers = data.influencers
    return influencers;
  } catch (error) {
    console.error(error);
  }
}

async function getInfluencerDetails(id) {
  try {
    const response = await axios.get(getInfluencerURL + id);
    var data = response.data
    var influencers = data.influencers
    return influencers;
  } catch (error) {
    console.error(error);
  }
}
async function getPlans() {
  try {
    const response = await axios.get(getPlansURL);
    var data = response.data
    var plans = data.plans
    return plans;
  } catch (error) {
    console.error(error);
  }
}

async function getPlanDetails(id) {
  try {
    const response = await axios.get(getPlansURL +"/"+ id);
    var data = response.data
    var plan = data.plans
    return plan;
  } catch (error) {
    console.error(error);
  }
}


export {getInfluencers, BASE_URL, API_URL, getInfluencerDetails, getPlans, getPlanDetails}