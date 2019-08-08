import React, {Component} from 'react';

import UpdateEmailScreen from '../../../components/HomeScreen/UpdateEmailScreen';

class UpdateEmail extends Component {
    submit = values => {
    }

    render () {
        return <UpdateEmailScreen _handleSubmit={this.submit}/>
    }
}

export default UpdateEmail;