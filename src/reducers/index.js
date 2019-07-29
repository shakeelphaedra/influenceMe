import {combineReducers} from 'redux';
import AuthReduce from './AuthReducer'
import {sliderState} from './defaults';
export * from './defaults';

export default combineReducers({
    auth: AuthReduce,
    currentUser: () => null,
    entries: () => sliderState,
    showRealApp: () => false,
})