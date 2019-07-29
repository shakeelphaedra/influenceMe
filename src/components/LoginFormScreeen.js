import React , {Component} from 'react';
import {View, Text, SafeAreaView, Picker, Header,Image} from 'react-native';
import {Button,Spinner,SelectTag,Input, Card, CardSection, BlackButton} from './common'
import * as actions from '../actions';
import { Dropdown } from 'react-native-material-dropdown';
import {connect} from  'react-redux';
import { influencerList, countryCodeList } from '../reducers';
import HeaderBackButton from './common/HeaderBackButton'



class LoginFormScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
                headerTitle: <Image source={require('../assets/www/dist/img/Icono-negro.png')} style={{height: 20, width: 20, color: 'black'}}/>,
                headerLeft: (
                    <Button onPress={() => navigation.push('WelcomeScreen')}><Image source={require('../assets/www/dist/img/weightlifting.png')} style={{width: 20, heigt: 20}}/>    </Button>
                )
            }
    }

    _renderButton(){
        if(this.props.loading){
            return <Spinner size='small'/>
        }
        return(
            <BlackButton onPress={this._onButtonPress.bind(this)}><Text>Log In</Text></BlackButton>
        )
    }
    _onButtonPress(){
        const {countryCode, phone, navigation} = this.props;
        this.props.loginUser({number: countryCode+phone, navigation: navigation})
    }
    _oPhoneChange(text){
        this.props.phoneChange(text)
    }
    _onCountryCodeChange(text){
        this.props.countryCodeChange(text)
    }
    _onInfluencerChange(text){
        this.props.influencerChanged(text)
    }
    render(){
        return (
            <SafeAreaView style={{justifyContent: 'center', flexDirection: 'column',backgroundColor: '#FAFAFA'}}>
                <View >
                    <Text style={{alignSelf: 'center'}}>Ingresa con tu numero movil</Text>
                    <SelectTag options={countryCodeList} 
                                label="Country Code" 
                                value={this.props.countryCode} 
                                overlayStyle={{borderRadius: 20, backgroundColor: 'yellow'}}
                                onChangeText={this._onCountryCodeChange.bind(this)}
                                style={{width: 20}}/>
                    <SelectTag options={influencerList}
                                label="Influencer"
                                value={this.props.influencer}
                                onChangeText={this._onInfluencerChange.bind(this)}
                                style={{width: 20}}/>
                </View>
                <View>
                    <CardSection>
                         <Input 
                            value={this.props.phone}
                            label="Phone"
                            placeholder="1234223"
                            keyboardType='numeric'
                            onChangeText={this._oPhoneChange.bind(this)}
                        ></Input>
                    </CardSection>
                </View>
                <View>
                    <BlackButton onPress={this._onButtonPress.bind(this)}>Login</BlackButton>
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state)=>{
    return {phone: state.auth.phone, 
            loading: state.auth.loading,
            phoneCode: state.auth.phoneCode,
            countryCode: state.auth.countryCode,
            influencer: state.auth.influencer
        }
}

export default connect(mapStateToProps, actions)(LoginFormScreen);
