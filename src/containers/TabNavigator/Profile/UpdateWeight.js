import React, { Component } from 'react';

import UpdateWeightScreen from '../../../components/AfterLoginScreen/UpdateWeightScreen';
import firebase from 'react-native-firebase';
import { Spinner } from '../../../components/common';
import { showMessage, hideMessage } from "react-native-flash-message";
import { fonts } from '../../../styles';

class UpdateWeight extends Component {
  state = {
    weight: '50 Lbs',
    loading: false,
    weightVal: '',
    weightScale: ''
  }
  componentDidMount() {
    user = firebase.auth().currentUser;
    console.log(user)
    that = this;
    firebase.database().ref('profiles/' + user.uid + "/weightVal").on('value', function (snapshot) {
      that.setState({ weightVal: snapshot.val() })
    });
    firebase.database().ref('profiles/' + user.uid + "/weightScale").on('value', function (snapshot) {
      that.setState({ weightScale: snapshot.val() })
    });
  }
  submit = ({ weightVal, weightScale }) => {
    this.setState({ loading: true, weightVal, weightScale })
    user = firebase.auth().currentUser;
    firebase.database().ref('profiles/' + user.uid).update({
      weightVal,
      weightScale
    }).then(e => {
      this.setState({ loading: false })
      showMessage({
        message: "Unidad Actualizada",
        backgroundColor: '#50ae54',
        type: "success",
      });
    }).catch(e => {
      this.setState({ loading: false })
      console.log("Error", e)
    })
  }
  render() {
    if (this.state.loading)
      return <Spinner />
    return <UpdateWeightScreen _handleSubmit={this.submit} weightScale={this.state.weightScale} weightVal={this.state.weightVal} navigation={this.props.navigation} />
  }
}

export default UpdateWeight;