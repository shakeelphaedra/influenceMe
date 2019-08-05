import React , {Component} from 'react';
import {View, Text, SafeAreaView, Picker, Header,Image} from 'react-native';
import {Button,Spinner,SelectTag,Input, Card, CardSection, BlackButton, WhiteHeader} from './common'
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
            <View style={{flex: 1,justifyContent: 'center', flexDirection: 'column',backgroundColor: '#FAFAFA'}}>
               <WhiteHeader />
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 100}}>
                    <View >
                        <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '200'}}>Ingresa con tu numero movil</Text>
                        <View style={{ flexDirection: 'row', marginTop: 30}}>
                        <SelectTag options={countryCodeList}
                                    label="country_code"
                                    showList={this.state.showCodeOptions}
                                    onSelect={this._onCountryCodeChange.bind(this)}
                                    value={this.props.countryCode}
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
                    <View>
                        <CardSection>
                            <Input 
                                value={this.props.phone}
                                label="Phone"
                                onSelect={() => this.setState({showList: false})}
                                placeholder="1234223"
                                keyboardType='numeric'
                                onChangeText={this._oPhoneChange.bind(this)}
                            ></Input>
                        </CardSection>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={{marginTop: 5}}> Accept the licence</Text>
                    <CheckBox
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}

                        />

                    </View>
                    </View>
                    <View>
                        <BlackButton onPress={this._onButtonPress.bind(this)}>Login</BlackButton>
                    </View>
                </View>
            </View>
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
