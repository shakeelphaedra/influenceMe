import React, { Component } from 'react';

import UpdateHeightScreen from '../../../components/AfterLoginScreen/UpdateHeightScreen';
import firebase from 'react-native-firebase';
import { Spinner } from '../../../components/common';
import { showMessage, hideMessage } from "react-native-flash-message";

class UpdateWeight extends Component {
  state = {
    loading: false,
    heightScale: '',
    heightValue: ''
  }
  submit = ({ heightScale, heightVal }) => {
    this.setState({ loading: true })
    user = firebase.auth().currentUser;
    firebase.database().ref('profiles/' + user.uid).update({
      heightScale, heightVal
    }).then(e => {
      this.setState({ loading: false })
      showMessage({
        message: "Unidad Actualizada",
        backgroundColor: '#50ae54',
        type: "success",
      });
    }).catch(e => {
      this.setState({ loading: false })
    })
  }
  componentDidMount() {
    that = this;
    user = firebase.auth().currentUser;
    ref = firebase.database().ref('/profiles/' + user.uid)
    ref.on('value', function (data) {
      that.setState({ heightScale: data.val().heightScale, heightVal: data.val().heightVal })
    })
  }
  render() {
    const { heightScale, heightVal } = this.state;
    if (this.state.loading)
      return <Spinner />
    return <UpdateHeightScreen heightScale={heightScale} heightVal={heightVal} _handleSubmit={this.submit} navigation={this.props.navigation} />
  }
}

export default UpdateWeight;