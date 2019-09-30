import React, { Component } from 'react';

import UpdateEmailScreen from '../../../components/AfterLoginScreen/UpdateEmailScreen';
import firebase from 'react-native-firebase';
import { Spinner } from '../../../components/common';
import { _signOutAsync } from '../../../actions';
import { showError } from '../../../../API';

class UpdateEmail extends Component {
  state = {
    loading: false,
    name: '', email: ''
  }

  componentDidMount() {
    user = firebase.auth().currentUser;
    reactThis = this;
    if (user != null) {
      // this.setState({
      //   email: user.email,
      // })
      ref = firebase.database().ref('/profiles/' + user.uid)
      ref.on('value', function (data) {
        reactThis.setState({ name: data.val().displayName, email: user.email})
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
            showError(e)
          })
          navigate('SettingsScreen');
          this.setState({ loading: false })
        }).catch((error) => {
          this.setState({ loading: false })
          showError(error)
        });
      }
    }
  }
  render() {
    if (this.state.loading)
      return <Spinner />
    return <UpdateEmailScreen name={this.state.name} emailChange={(val) => this.setState({email: val})} nameChange={val => this.setState({name: val})} initialValues={{email: this.state.email, name: this.state.name }} email={this.state.email} _handleSubmit={this.submit} navigation={this.props.navigation} />
  }
}

export default UpdateEmail;