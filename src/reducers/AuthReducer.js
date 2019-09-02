import { PHONE_CHANGE, COUNTRYCODE_CHANGE, INFLUENCER_CHANGE, CONFIRM_RESULT_CHANGE, CONFIRM_CODE_CHANGE, SET_CURRENT_USER, SET_LOADING_FALSE, SET_LOADING_TRUE } from '../actions/types'
import { authState } from '../utils'
export default (state = authState, action) => {
  switch (action.type) {
    case PHONE_CHANGE:
      return { ...state, phone: action.payload }
    case COUNTRYCODE_CHANGE:
      return { ...state, countryCode: action.payload }
    case INFLUENCER_CHANGE:
      return { ...state, influencer: action.payload }
    case CONFIRM_RESULT_CHANGE:
      return { ...state, confirmResult: action.payload, message: 'Code is sent to your number' }
    case CONFIRM_CODE_CHANGE:
      return { ...state, confirmCode: action.payload }
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SET_LOADING_TRUE:
      return { ...state, loading: true }
    case SET_LOADING_FALSE:
      return { ...state, loading: false }
    default:
      return state;
  }
}