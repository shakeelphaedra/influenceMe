import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import AppText from '../../common/AppText';
import {NAMED_COLORS} from '../../common/AppColors';

// import settingImage from '../../assets/www/dist/img/settings-outline.png'
import arrowRight from '../../assets/www/dist/img/right-arrow.png';
let width = Dimensions.get('window').width;
let Screenheight = Dimensions.get('window').height;
import defaultUser from '../../assets/www/dist/img/userM.png';

class SettingsScreen extends Component {
    render () {
        const { handleGmailUpdate } = this.props;
        return (
            <View style={styles.container}>
                {/*  =======   header container  ======*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {}} style={styles.touchableOpacityStyle}>
                     {/* <Image source={s} style={{flex:1, height:undefined, width:undefined, resizeMode:"contain"}}/> */}
                    </TouchableOpacity>
                    <Text style={{alignSelf:'center', color:NAMED_COLORS.white}}>settings</Text>
                    <TouchableOpacity onPress={() => {}} style={styles.touchableOpacityStyle}>
                     {/* <Image source={settingImage} style={{flex:1, height:undefined, width:undefined, resizeMode:"contain"}}/> */}
                    </TouchableOpacity>
                </View>
                {/* ============= header end ============= */}

                <View style={styles.userPic}>
                    <Image source={defaultUser} style={{flex: 0.7, height:undefined, width:undefined, resizeMode:"contain"}}/>

                </View>
                <ScrollView style={{flex:0.65, backgroundColor: NAMED_COLORS.backgroundDarkGray}}>
                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}>Nombre</AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}>test</AppText>
                        </View>
                    </View>
                    
                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}> 
                            Correo
                        </AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}>abc...</AppText>
                            <TouchableOpacity onPress={handleGmailUpdate} style={styles.imageClick}>
                             <Image source={arrowRight} style={styles.leftArrowImage}/>
                            </TouchableOpacity>
                        </View> 
                    </View>

                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}>Unidades de Peso</AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}>Lbs</AppText>
                            <TouchableOpacity style={styles.imageClick}>
                             <Image source={arrowRight} style={styles.leftArrowImage}/>
                            </TouchableOpacity>
                        </View> 
                    </View>

                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}>Unidades de Altura</AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}>Pulgadas</AppText>
                            <TouchableOpacity style={styles.imageClick}>
                             <Image source={arrowRight} style={styles.leftArrowImage}/>
                            </TouchableOpacity>
                        </View> 
                    </View>

                    {/* ===========MI SUSCRIPCION ============== */}
                    <View style={styles.headingRow}>
                      <AppText style={{alignSelf:'center'}}>MI SUSCRIPCION</AppText>
                    </View>

                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}>Estado</AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}>Activo</AppText>
                        </View> 
                    </View>
                    <View style={styles.row}>
                        <AppText style={{flex:0.6, alignSelf:'center'}}>Cancelar Suscription</AppText>
                        <View style={styles.leftArrowWithText}>
                            <AppText style={styles.innerTextStyle}></AppText>
                            <TouchableOpacity style={styles.imageClick}>
                             <Image source={arrowRight} style={styles.leftArrowImage}/>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}

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
        flex:0.5,
    },
    row: {
        flexDirection:'row',
        height: Screenheight*0.09, 
        backgroundColor: NAMED_COLORS.darkGray, 
        marginBottom:2,
        marginTop:2,
        padding: 15
    },
    headingRow: {
        flexDirection:'row',
        height: Screenheight*0.09, 
        marginBottom:2,
        marginTop:2,
        padding: 15
    },
    leftArrowWithText:{
        flex: 0.3, 
        flexDirection:'row',
        justifyContent:'center'
    },
    leftArrowImage: {
        flex:1,
        height:undefined, 
        width:undefined, 
        resizeMode:"contain"
    },
    innerTextStyle: {
        flex:1, 
        alignSelf:'center',
        fontSize: 15,
    },
    imageClick:{
        flex: 0.2,
    }
  });

export default SettingsScreen