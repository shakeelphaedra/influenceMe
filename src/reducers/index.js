import { combineReducers } from 'redux';
import AuthReduce from './AuthReducer'
import { sliderState } from '../utils';
export * from '../utils';
import { reducer as formReducer } from 'redux-form'
import SubscriptionReducer from './SubscriptionReducer';


export default combineReducers({
  auth: AuthReduce,
  form: formReducer,
  currentUser: () => null,
  entries: () => sliderState,
  showRealApp: () => false,
  subscription: SubscriptionReducer
})