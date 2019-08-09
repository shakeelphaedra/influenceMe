import CodeInput from 'react-native-confirmation-code-input';
import React, {Component} from 'react';
import { BlackButton, WhiteButton, WhiteHeader} from './common';
import {View, Alert, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {SET_CURRENT_USER} from '../actions/types'
import { fonts } from '../styles';

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
                this.props.navigation.push("HomeScreenNavigator")
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
            <View><WhiteHeader/>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF0F1' }}>
                    
                    <View style={{ marginLeft: 50, marginRight: 50,flexDirection: 'column', alignItems: 'center',  }}>
                        <Text style={{fontFamily: fonts.esp_extraLight,alignSelf: 'center',justifyContent: 'center', fontSize: 18,marginTop: -5, fontWeight: '300'}}>Ingresa el Codigo</Text>
                        <Text style={{color: '#d75019', top: 0,fontFamily: fonts.esp_light,fontSize: 20,marginVertical: 10, marginTop:70}}>{this.props.phone}</Text>
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
                                containerStyle={{ marginVertical: 10} }
                                codeInputStyle={{ color: 'black', borderRadius: 12, width: 25, height: 40 , backgroundColor: 'white',  borderWidth: 0,
                                marginLeft: 20}}
                                />
                        </View>
                        <Text style={{color: '#d75019' ,fontFamily: fonts.esp_light,marginTop: 0, marginBottom: 60, fontSize: 20}}>No obtuve un codigo</Text>
                        

                        <View style={{ height: '50%', alignItems: 'center'}}>
                            <BlackButton color="#d75019" backgroundColor="black" fontSize={22} style={{paddingVertical: 30,  width: 250}} onPress={this._onConfirmCode.bind(this)}>REGISTRAR</BlackButton >
                            <BlackButton color="black" backgroundColor="white" fontSize={20} style={{paddingVertical: 30, paddingLeft: 2, paddingRight: 2 , width: 250, marginTop: 10}} onPress={this._onConfirmCode.bind(this)}>CAMBRIAR NUMBERO</BlackButton >
                        </View>    
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