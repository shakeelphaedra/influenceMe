import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import InputField from '../../common/Input';
import { Field, reduxForm } from 'redux-form'
import {NAMED_COLORS} from '../../common/AppColors';
import settingImage from '../../assets/www/dist/img/settings-outline.png'
import defaultUser from '../../assets/www/dist/img/userM.png';
import { BlackButton } from '../common';
let Screenheight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

class UpdateEmailScreen extends Component {

    render () {
        const { _handleSubmit, handleSubmit } = this.props;
        return (
            <View style={styles.container}>
                {/*  =======   header container  ======*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {}} style={styles.touchableOpacityStyle}>
                     <Image source={settingImage} style={{flex:1, height:undefined, width:undefined, resizeMode:"contain"}}/>
                    </TouchableOpacity>
                    <Text style={{flex:1,position: 'absolute',top: Screenheight*0.045, left: (ScreenWidth / 2) - 25,color:NAMED_COLORS.white}}>Formulario</Text>
                </View>
                {/* ============= header end ============= */}

                <View style={styles.userPic}>
                    <Image source={defaultUser} style={{flex: 0.7, height:undefined, width:undefined, resizeMode:"contain"}}/>
                </View>
                <View style={{flex:0.65, backgroundColor: NAMED_COLORS.backgroundDarkGray}}>
                    <Field
                        name='name'
                        placeholder='Usuario'
                        errorTextColor="red"
                        component={InputField}
                        keyboardType='default'
                        customContainerStyle={styles.input}
                        customInputStyle={{ color: NAMED_COLORS.orangeColor }}
                    />
                    <Field
                        name='email'
                        placeholder='Email'
                        errorTextColor="red"
                        component={InputField}
                        keyboardType='email-address'
                        customContainerStyle={styles.input}
                        customInputStyle={{ color: NAMED_COLORS.orangeColor }}
                    />
                    <BlackButton
                        type="submit"
                        onPress={handleSubmit(_handleSubmit)} 
                        color={'white'} 
                        backgroundColor={NAMED_COLORS.orangeColor}
                        style={{marginTop:40}}
                    >
                        ACTUALIZAR
                    </BlackButton>


                </View>
            </View>
        )
    }
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = '*Required';
    }

    if (!values.email) {
        errors.email = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'not valid email!'
    }

    return errors;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: NAMED_COLORS.darkGray
    },
    header: {
        flex:0.12, 
        flexDirection:'row',
        paddingLeft:10,
        paddingRight: 10,
    },
    userPic: {
        flex:0.23,
        backgroundColor: NAMED_COLORS.backgroundDarkGray,
        justifyContent:'center'
    },
    touchableOpacityStyle:{
        flex:0.1,
    },
    input:{
        color:'white',
        paddingLeft:30,
        paddingRight: 30,
    },
  });

export default (reduxForm({
    form: 'UpdateEmail',
    enableReinitialize: true,
    validate,
})(UpdateEmailScreen))