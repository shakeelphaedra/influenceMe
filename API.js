import axios from 'axios';
const BASE_URL = "https://influenceme-backend.herokuapp.com"
const API_URL = BASE_URL + '/api/v1';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';

const getInfluencersURL = "/influencers/list"

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

export {getInfluencers, BASE_URL, API_URL}