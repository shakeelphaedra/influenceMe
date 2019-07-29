import React, {Component} from 'react';
import {SafeAreaView, Text, Image, View, ImageBackground, Dimensions} from 'react-native'; 
import {Button, BlackButton} from './common'

const screenWidth = Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;
class AfterWelcome extends Component{
    static navigationOptions = {
        header: null,
    };
    render () {
        console.log('jjj: ', screenHeight, screenWidth);
        return (
            
            <ImageBackground source={require('../assets/www/dist/img/suscriber.png')} style={styles.imageBackgroundStyle} 
            resizeMode='stretch' >
                <SafeAreaView style={{flex: 1,}}>
                    <View style={styles.containerStyle}>
                        <Text>INGRESAR CON</Text>
                        <BlackButton onPress={()=>{this.props.navigation.push("LoginFormScreen")}}>TU TELEFONE</BlackButton>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = {
    imageBackgroundStyle: { 
        width: '100%',
        height: '100%',
        flex: 1,
    },
    textStyle: {
    },
    containerStyle: {
        fontSize: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}


export default AfterWelcome;