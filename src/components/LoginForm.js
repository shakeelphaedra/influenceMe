import React , {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button,Spinner,Input, Card, CardSection} from './common'
import firebase from 'firebase';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from  'react-redux';

class LoginForm extends Component{
    renderButton(){
        if(this.props.loading){
            return <Spinner size='small'/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}><Text>Log In</Text></Button>
        )
    }
    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password})
    }
    onSuccessLogin(){
        this.setState({error: '', email: '', password: '',loading: false})
    }
    onFailLogin(){
        this.setState({error: 'Authentication Failed', loading: false})
    }
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.props.email}
                        label="email"
                        placeholder="user@example.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    ></Input>
                </CardSection>
                <CardSection>
                    <Input 
                        label='password' 
                        value={this.props.password}
                        secureTextEntry={true}
                        onChangeText={text => {this.props.passwordChanged(text)}}
                        placeholder="***"
                    />
                </CardSection>
                <Text style={{color: 'red', fontSize: 18, alignSelf: 'center'}}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            )
    }
}

const mapStateToProps = (state)=>{
    return {email: state.auth.email, password: state.auth.password, error: state.auth.error, loading: state.auth.loading}
}

export default connect(mapStateToProps, {passwordChanged, emailChanged, loginUser})(LoginForm);
