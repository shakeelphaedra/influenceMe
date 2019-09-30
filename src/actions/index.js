import { SHOW_REAL_APP, PHONE_CHANGE, COUNTRYCODE_CHANGE, INFLUENCER_CHANGE, CONFIRM_RESULT_CHANGE, CONFIRM_CODE_CHANGE, SET_LOADING_TRUE, SET_LOADING_FALSE, SET_SUBSCRIPTION } from './types';

import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import { createUser , subscribe, unsubscribe} from '../../API';


import { showMessage, hideMessage } from "react-native-flash-message";
import { NAMED_COLORS } from '../common/AppColors';

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


export const loginUser = ({ number, navigation }, that) => {
  console.log("button clicked");
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_TRUE,
      payload: true
    })
    firebase.auth().signInWithPhoneNumber(number)
      .then(confirmResult => {
        console.log('Success');

        dispatch({
          type: CONFIRM_RESULT_CHANGE,
          payload: confirmResult
        })
        dispatch({
          type: SET_LOADING_FALSE,
          payload: true
        })
        navigation.push("ConfirmCodeScreen")
      })
      .catch(error => {
        dispatch({
          type: SET_LOADING_FALSE,
          payload: true
        })
        showMessage({
          message: "Teléfono Inválido",
          backgroundColor: NAMED_COLORS.orange,
          type: "danger",
        });
        // that.refs.toast.show("")
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

export const CodeConfirm = ({ val, navigation, confirmResult, confirmForm }) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING_TRUE,
      payload: true
    })
    confirmResult.confirm(val).then((user) => {
      console.log('success')
      firebase.database().ref('profiles/' + user.uid).update({
        email: user.email,
        phoneNumber: user.phoneNumber
      }).then(e => {
        console.log("success", e)
      }).catch(e => {
        console.log("Error", e)
      })
      const params = { email: user.email, uid: user.uid, phoneNumber: user.phoneNumber }
      createUser(params).then( data => {
        dispatch({
          type:  SET_SUBSCRIPTION,
          payload: data.users.user_type
        })
      })
      _signInAsync(navigation, user)
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
      dispatch({
        type: SET_LOADING_FALSE,
        payload: true
      })
    }).catch(error => {
      dispatch({
        type: SET_LOADING_FALSE,
        payload: true
      })
      confirmForm.setState({ dialogCheckVisiable: true })
    })
  }
}
_signInAsync = async (navigation, user) => {
  await AsyncStorage.setItem('userId', user.uid);
  navigation.navigate('AfterLoginNavigator');
};
export const Subscribe = () => {
  return (dispatch) =>{
    subscribe().then(res => {
      dispatch({
        type: SET_SUBSCRIPTION,
        payload: 'paid'
      })
      AsyncStorage.setItem('subscription', "paid");
    })

  }
}
export const CancelSubscription = () => {
  return (dispatch) =>{
    unsubscribe().then(res => {
      dispatch({
        type: SET_SUBSCRIPTION,
        payload: 'free'
      })
      AsyncStorage.setItem('subscription', "free");
    })
  }
}