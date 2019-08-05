import CodeInput from 'react-native-confirmation-code-input';
import React, {Component} from 'react';
import {Button, BlackButton, WhiteButton} from './common';
import {View, Alert, Image,TouchableHighlight, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {SET_CURRENT_USER} from '../actions/types'

class ConfirmCodeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
                headerStyle: {
                    height: 5,
                    boxShodow: 4,
                    backgroundColor: 'white'
                },
                headerTitle: <Image source={require('../assets/www/dist/img/Icono-negro.png')} style={{height: 30, width: 30, marginBottom: 60}}/>,
                headerLeft: null,
                headerRight: null
            }
    }

    _onConfirmCode () {
        if(this.props.confirmCode == ""){
            return Alert.alert("Code is empty ")
        }else{
            this.props.confirmResult.confirm(this.props.confirmCode).then((user) => {
                this.props.navigation.push("HomeHomeScreenNavigatorScreen")
                return  (dispatch) => {
                    dispatch({
                        type: SET_CURRENT_USER,
                        payload: user
                    })
                }
            })
        }
        
    }

    _onFinishCheckingCode1(code){
        this.props.confirmCodeChange(code)
    }
    
    render (){
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF0F1' }}>
                <View style={{ marginLeft: 50, marginRight: 50, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                    <Text>Ingresa el Codigo</Text>
                    <Text style={{color: 'red', top: 0}}>{this.props.phone}</Text>
                    <View style={{height: 100}}>
                        <CodeInput
                            ref="codeInputRef2"
                            activeColor='rgba(49, 180, 4, 1)'
                            inactiveColor='rgba(49, 180, 4, 1.3)'
                            autoFocus={false}
                            codeLength={6}
                            ignoreCase={true}
                            inputPosition='center'
                            codeInputStyle={{}}
                            containerStyle={{}}
                            onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                            containerStyle={{ marginTop: 30 }}
                            codeInputStyle={{ borderWidth: 0, borderRadius: 9, width: 25, height: 40 , backgroundColor: 'white', borderBottom: 1, 
                            borderBottomColor: 'black',
                            borderBottomWidth: 0.5,
                            marginLeft: 20}}
                            />
                    </View>
                    <Text style={{color: 'red'}}>No obtuve un codigo</Text>
                    
                    <Text style={{alignSelf: 'center'}}>RECIBIRALS UN NUEVO CODIGO EN UNDOS SEGUNDOS</Text>

                    <View style={{ height: '50%', alignItems: 'center'}}>
                        <BlackButton onPress={this._onConfirmCode.bind(this)}>REGISTRAR</BlackButton>
                        <WhiteButton onPress={this._onConfirmCode.bind(this)}>CAMBRIAR</WhiteButton>
                    </View>    
                </View>    
            </View>
        )
    }
}

const mapStatsToProps = (state) => {
    return {
        confirmResult: state.auth.confirmResult,
        confirmCode: state.auth.confirmCode,
        phone: state.auth.countryCode + state.auth.phone
    }
}

export default connect(mapStatsToProps, actions)(ConfirmCodeScreen);