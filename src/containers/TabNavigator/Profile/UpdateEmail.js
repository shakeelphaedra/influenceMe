import React, { Component } from 'react';

import UpdateEmailScreen from '../../../components/AfterLoginScreen/UpdateEmailScreen';
import firebase from 'react-native-firebase';
import { Spinner } from '../../../components/common';
import { _signOutAsync } from '../../../actions';

class UpdateEmail extends Component {
  state = {
    loading: false,
    username: '', email: ''
  }

  componentDidMount() {
    user = firebase.auth().currentUser;
    if (user != null) {
      this.setState({
        username: user.displayName,
        email: user.email,
      })
    }
  }
  submit = values => {
    this.setState({ loading: true })
    user = firebase.auth().currentUser;
    if (user) {
      if (values.email) {
        user.updateEmail(values.email).then((u) => {
          const { navigation: { navigate } } = this.props;
          if (values.displayName) {
            user.updateProfile({ displayName: values.name }).then(() => {
            }).catch((error) => {
              _signOutAsync();
              this.setState({ loading: false })
            });
          }
          firebase.database().ref('profiles/' + user.uid).update({
            email: values.email,
            displayName: values.name
          }).then(e => {
            this.props.navigation.goBack()
          }).catch(e => {
            console.log("Error", e)
          })
          navigate('SettingsScreen');
          this.setState({ loading: false })
        }).catch((error) => {
          this.setState({ loading: false })
        });
      }
    }
  }
  render() {
    if (this.state.loading)
      return <Spinner />
    return <UpdateEmailScreen username={this.state.username} email={this.state.email} _handleSubmit={this.submit} navigation={this.props.navigation} />
  }
}

export default UpdateEmail;