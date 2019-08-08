import CodeInput from 'react-native-confirmation-code-input';
import React, {Component} from 'react';
import { BlackButton, WhiteButton, WhiteHeader} from './common';
import {View, Alert, Image, Text} from 'react-native';
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
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF0F1' }}>
                <WhiteHeader/>
                <View style={{ marginLeft: 50, marginRight: 50,  marginTop: 50,flexDirection: 'column', alignItems: 'center', }}>
                    <Text style={{fontFamily: 'Esphimere',alignSelf: 'center', fontSize: 18,marginTop: 60, fontWeight: '300'}}>Ingresa el Codigo</Text>
                    <Text style={{color: '#d75019', top: 0,fontWeight: '300', fontFamily: 'Esphimere',fontSize: 22,marginVertical: 30, marginTop: 50}}>{this.props.phone}</Text>
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
                            containerStyle={{ } }
                            codeInputStyle={{ color: 'black', borderRadius: 12, width: 25, height: 40 , backgroundColor: 'white',  borderWidth: 0,
                            marginLeft: 20}}
                            />
                    </View>
                    <Text style={{color: '#d75019' ,fontFamily: 'Esphimere',fontWeight: '300',marginTop: 0, marginBottom: 60, fontSize: 22}}>No obtuve un codigo</Text>
                    

                    <View style={{ height: '50%', alignItems: 'center'}}>
                        <BlackButton color="#d75019" backgroundColor="black" fontSize={25} style={{paddingVertical: 30,  width: 300}} onPress={this._onConfirmCode.bind(this)}>REGISTRAR</BlackButton >
                        <BlackButton color="black" backgroundColor="white" fontSize={25} style={{paddingVertical: 30, paddingLeft: 5, paddingRight: 5 , width: 300, marginTop: 5}} onPress={this._onConfirmCode.bind(this)}>CAMBRIAR NUMBERO</BlackButton >
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