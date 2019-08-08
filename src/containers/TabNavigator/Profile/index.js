import React, {Component} from 'react';
import ProfileScreen from '../../../components/HomeScreen/ProfileScreen';

class Profile extends Component {
    handleSettingsClick = () => {
        const {navigation:{navigate}} = this.props;
        navigate('SettingsScreen');
    }
    render () {
        return <ProfileScreen settingsClick={this.handleSettingsClick}/>
    }
}

export default Profile;