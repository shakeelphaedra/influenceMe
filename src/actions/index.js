import {SHOW_REAL_APP, PHONE_CHANGE, COUNTRYCODE_CHANGE, INFLUENCER_CHANGE, CONFIRM_RESULT_CHANGE, CONFIRM_CODE_CHANGE} from './types';
import firebase from 'react-native-firebase';


export const showRealAppAction = (val) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_REAL_APP,
            payload: true
        })
    }
}

export const countryCodeChange = (value) => {
    return (dispatch) => {
        dispatch({
            type: COUNTRYCODE_CHANGE,
            payload: value
        })
    }
}

export const phoneChange = (value) => {
    return (dispatch) => {
        dispatch({
            type: PHONE_CHANGE,
            payload: value
        })
    }
}

export const influencerChanged = (value) => {
    return (dispatch) => {
        dispatch({
            type: INFLUENCER_CHANGE,
            payload: value
        })
    }
}


export const loginUser = ({number, navigation}) => {
    return (dispatch) => {
        firebase.auth().signInWithPhoneNumber(number)
            .then(confirmResult => {
                dispatch({
                    type: CONFIRM_RESULT_CHANGE,
                    payload: confirmResult
                })
                navigation.push("ConfirmCodeScreen")
            })
            .catch(error =>{
            });
    }
}

export const confirmCodeChange = (val) => {
    return (dispatch) => {
        dispatch({
            type: CONFIRM_CODE_CHANGE,
            payload: val
        })
    }
}