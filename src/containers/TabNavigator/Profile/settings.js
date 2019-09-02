import React, { Component } from 'react';
import SettingsScreen from '../../../components/AfterLoginScreen/SettingsScreen';
import firebase from 'react-native-firebase';
import { showMessage } from 'react-native-flash-message';
import { Spinner } from '../../../components/common';
import { NAMED_COLORS } from '../../../common/AppColors';

class Settings extends Component {
	state = {
		username: '',
		email: '',
		uid: '',
		weightScale: '',
		heightScale: '',
		phoneNumber: '',
		loading: false,
		mounted: false
	}
	gotoUpdateEMail = () => {
		const { navigation: { navigate } } = this.props;
		navigate('UpdateEmailScreen');
	}
	componentDidMount() {
		that = this;
		user = firebase.auth().currentUser;
		if (!this.state.mounted)
			this.props.navigation.addListener('didFocus', this._handleStateChange);
	}
	goToLbsUpdate = () => {
		const { navigation: { navigate } } = this.props;
		navigate('UpdateWeightScreen');
	}
	_handleStateChange = state => {
		that = this;
		user = firebase.auth().currentUser;
		if (user != null) {
			this.setState({
				username: user.displayName,
				email: user.email,
				uid: user.uid,
				phoneNumber: user.phoneNumber
			})  // The user's ID, unique to the Firebase project. Do NOT use
			firebase.database().ref('profiles/' + user.uid).on('value', function (snapshot) {
				data = snapshot.val()
				if (data) {
					that.setState({ weightScale: data.weightScale, heightScale: data.heightScale, loading: false, mounted: true })
				}
			});
		}
		console.log('Refreshed successfully!')
	};

	signOutAsync() {
		this.setState({ loading: true })
		that = this;
		firebase.auth().signOut().then(() => {
			AsyncStorage.clear();
			that.navigation.navigate('BeforeLoginNavigation');
			that.setState({ loading: false })
		}).catch(e => {
			that.setState({ loading: false })
			showMessage({
				message: e.message,
				type: 'danger',
				backgroundColor: NAMED_COLORS.orange,
			})
		})
	};


	render() {
		const { username, email, signOutAsync, phoneNumber, weightScale, heightScale, uid, loading } = this.state;
		// if(loading)
		//   return <Spinner/>
		return (
			<SettingsScreen
				handleGmailUpdate={this.gotoUpdateEMail}
				username={username}
				email={email}
				phoneNumber={phoneNumber}
				weightScale={weightScale}
				heightScale={heightScale}
				signOutAsync={signOutAsync}
				handleLbsUpdate={this.goToLbsUpdate}
				handlePulgadaUpdate={this.gotoPulgadaUpdate}
				navigation={this.props.navigation}
				handleWeightUpdate={this.goToLbsUpdate}
				handleCancelSubscription={this.gotoCancelSubscription}
			/>
		)
	}
}

export default Settings;