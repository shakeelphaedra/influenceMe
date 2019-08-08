import React, {Component} from 'react';
import SettingsScreen from '../../../components/HomeScreen/SettingsScreen';

class Settings extends Component {
    gotoUpdateEMail = () => {
        const {navigation:{navigate}} = this.props;
        navigate('UpdateEmailScreen');
    }

    goToLbsUpdate = () => {

    }

    gotoPulgadaUpdate = () => {

    }

    gotoCancelSubscription = () => {

    }

    render () {
        return (
        <SettingsScreen 
            handleGmailUpdate={this.gotoUpdateEMail}
            handleLbsUpdate={this.goToLbsUpdate}
            handlePulgadaUpdate={this.gotoPulgadaUpdate}
            handleCancelSubscription={this.gotoCancelSubscription}
        />
        )
    }
}

export default Settings;