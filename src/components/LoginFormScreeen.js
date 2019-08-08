import React , {Component} from 'react';
import {View, Text,Image, Platform} from 'react-native';
import {Spinner,SelectTag,Input, BlackButton, WhiteHeader} from './common'
import * as actions from '../actions';
import {connect} from  'react-redux';
import { influencerList, countryCodeList } from '../reducers';
import { CheckBox } from 'react-native-elements';

class LoginFormScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          canada: '',
          showCodeOptions: false,
          showInfluencerOptions: false,
          checked: false
        };
    }
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

    _renderButton(){
        if(this.props.loading){
            return <Spinner size='small'/>
        }
        return(
            <BlackButton onPress={this._onButtonPress.bind(this)}><Text>Log In</Text></BlackButton>
        )
    }
    _onButtonPress(){
        this.setState({showList: false})
        if(this.state.checked){
            const {countryCode, phone, navigation} = this.props;
            this.props.loginUser({number: countryCode+phone, navigation: navigation})
        }
       
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
        const dropdownStyle = Platform.OS === 'ios' ? {flexDirection: 'row',position:'relative',zIndex:9999} : {flexDirection: 'row'};
        return (
            <View style={{flex: 1,justifyContent: 'center', flexDirection: 'column',backgroundColor: '#f2f2f2'}}>
               <WhiteHeader onPress={()=> this.props.navigation.push("AfterWelcomeScreen")}/>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 100}}>
                    <View style={Platform.OS === 'ios'? {position:'relative',zIndex:9999}: {}}>
                        <Text style={{fontFamily: 'Esphimere',alignSelf: 'center', fontSize: 18, fontWeight: '300'}}>Ingresa con tu numero movil</Text>
                        <View style={dropdownStyle}>
                        <SelectTag options={countryCodeList}
                                    label="country_code"
                                    showList={this.state.showCodeOptions}
                                    onSelect={this._onCountryCodeChange.bind(this)}
                                    value={this.props.countryCode}
                                    flag={this.props.flag}
                                    onPress={()=> {this.setState({showInfluencerOptions: false})}}
                                    style={{width: 10}}/>
                        <SelectTag options={influencerList}
                                    label="influencer"
                                    showList={this.state.showInfluencerOptions}
                                    onSelect={this._onInfluencerChange.bind(this)}
                                    value={this.props.influencer}
                                    onPress={()=> {this.setState({showCodeOptions: false})}}
                                    style={{width: 20}}/>
                        </View>
                    </View>
                        <Input 
                            value={this.props.phone}
                            label="Phone"
                            onSelect={() => this.setState({showList: false})}
                            placeholder="Numero de Celular"
                            keyboardType='numeric'
                            inputStyle={{borderRadius: 50, height: '100%', fontWeight: '200'}}
                            onChangeText={this._oPhoneChange.bind(this)}
                        />
                    <View style={{padding: 20}}>
                        <Text style= {{fontSize: 22, textAlign: 'justify', fontFamily: 'Esphimere', fontWeight: '300'}}>
                            Te enviaremos un mensaje de texto con tu codigo de validacaion recuerda verificar que  tu numero de celular fue ingresado
                            correctamente
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center',marginBottom: 30 }}>
                            <Text style={{fontSize: 18, fontFamily: 'Esphimere'}}> Acepto los terminos y condiciones</Text>
                            <CheckBox
                                checkedColor="#308b82"
                                uncheckedColor="#585858"
                                checked={this.state.checked}
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                        </View>
                    </View>
                    <View>
                        <BlackButton color="#d75019" backgroundColor="black" style={{paddingVertical: 20}} onPress={this._onButtonPress.bind(this)}>ENVIAR SMS</BlackButton>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state)=>({
    phone: state.auth.phone, 
    loading: state.auth.loading,
    phoneCode: state.auth.phoneCode,
    countryCode: state.auth.countryCode,
    influencer: state.auth.influencer,
    flag: state.auth.flag
})

export default connect(mapStateToProps, actions)(LoginFormScreen);
