import React, { Component } from 'react';
import CancelSubscriptionScreen from '../../../components/AfterLoginScreen/CancelSubscriptionScreen';
import firebase from 'react-native-firebase';
import { Spinner } from '../../../components/common';

class CancelSubscription extends Component {
  state = { loading: false }

  submit = values => {
    this.setState({ loading: true })
  }

  render() {
    if (this.state.loading)
      return <Spinner />
    return <CancelSubscriptionScreen _handleSubmit={this.submit} navigation={this.props.navigation} />
  }
}

export default CancelSubscription;