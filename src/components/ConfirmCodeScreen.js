import CodeInput from 'react-native-confirmation-code-input';
import React, {Component} from 'react';
import {Button} from './common';
import {View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {SET_CURRENT_USER} from '../actions/types'

class ConfirmCodeScreen extends Component {
    _onConfirmCode (value) {
        this.props.confirmResult.confirm(this.props.confirmCode).then((user) => {
            return  (dispatch) => {
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: user
                })
            }
        })
    }
    _onFinishCheckingCode1(code){
        this.props.confirmCodeChange(code)
    }
    render (){
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <CodeInput
                    ref="codeInputRef2"
                    activeColor='rgba(49, 180, 4, 1)'
                    inactiveColor='rgba(49, 180, 4, 1.3)'
                    autoFocus={false}
                    codeLength={6}
                    ignoreCase={true}
                    inputPosition='center'
                    size={50}
                    onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{ borderWidth: 1.5 }}
                    />
                <View style={{ height: '50%'}}>
                    <Button onPress={this._onConfirmCode.bind(this)}>Confirm Code</Button>
                </View>    
            </View>
        )
    }
}

const mapStatsToProps = (state) => {
    return {confirmResult: state.auth.confirmResult, confirmCode: state.auth.confirmCode}
}

export default connect(mapStatsToProps, actions)(ConfirmCodeScreen);