import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {NAMED_COLORS} from '../../common/AppColors';
import settingImage from '../../assets/www/dist/img/settings-outline.png'
import Icon from '../common/Icon';
import { fonts, commonStyle } from '../../styles';

class ProfileScreen extends Component {
    render () {
        const {settingsClick} = this.props;
        return (
            <View style={styles.container}>
                {/*  =======   header container  ======*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={settingsClick} style={styles.touchableOpacityStyle}>
                        <Icon name='uniF214'  color='white' size={30}  />      
                    </TouchableOpacity>
                    <Text style={{color:NAMED_COLORS.white, fontFamily:  fonts.esp, fontSize: 15}}>Perfil</Text>
                    <TouchableOpacity
                        onPress={() => {}}
                        underlayColor={'#444444'}
                        >
                        <Icon name='uniF19E'  color='white' size={30}  />
                    </TouchableOpacity>
                </View>
                <View style={[{height: 100,paddingLeft: 15, flexDirection: 'row', alignItems: 'center'}]}>
                    <View style={{ width: 100}}>
                        <Image source={require('../../assets/www/dist/img/Icono-blanco.png')} style={{height: 70, width: 70 }}/>
                    </View>
                    <View style={{ alignItems: 'center'}}>
                        <Text style={{fontFamily:  fonts.esp, color: 'white', paddingVertical: 10, marginRight: 40, alignSelf: 'flex-start'}}>Test</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 40}}>
                                <Icon name='uniF12B' color='white' size={20} />
                            </View>
                            <Text style={{fontFamily:  fonts.esp_light, color: 'white',}}>InfluenceMe</Text>
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontFamily:  fonts.esp, color: 'white'}}>Plan Actual</Text>
                    </View>
                    <View style={{height: 200}}>
                        <TouchableOpacity >
                            <View  style={styles.backgroundImageContainerStyle} >
                                <ImageBackground 
                                    style={{width: '100%', height: '100%', }}
                                    source={require('../../assets/www/dist/img/bg001.jpg')}
                                >
                                    <View style={styles.boxShadow}>
                                        <Text style={{fontFamily: fonts.esp, fontSize: 70,color: 'white', opacity: 0.5}}>10 %</Text>
                                        <View style={{position: 'relative', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                            <Text style={[styles.titleStyle]}>askoaskoaks</Text>
                                            <Text style={[styles.descriptionStyle]}>assjaosj</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: NAMED_COLORS.darkGray,
    },
    backgroundImageContainerStyle: {
        backgroundColor: '#A4A4A4',
        color: '#A7A7A7'
    },
    boxShadow: {
        backgroundColor:'rgba(0,0,0,0.2)',
        width: '100%',
        flex: 1,
        alignSelf: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 1,
    },
    titleStyle: { 
        zIndex: 2,
        fontSize: 14,
        marginBottom: 10,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 0,
        color: 'white',
        opacity: 0.8
    },
    descriptionStyle: {
        zIndex: 2,
        fontSize: 20,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 0,
        marginBottom: 20,

        color: 'white',
        opacity: 0.8
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingLeft:15,
        height: 40,
        paddingRight: 15,
        alignItems: 'center'
    },
    headerBottom: {
        flex:0.18, 
    },
    touchableOpacityStyle:{
        height:30,
        width:30, 
    },
    title: {
      fontSize: 19,
      fontFamily: fonts.esp_light
    },
    activeTitle: {
      color: 'red',
    },
  });

export default ProfileScreen