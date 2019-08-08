import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NAMED_COLORS} from '../../common/AppColors';
import settingImage from '../../assets/www/dist/img/settings-outline.png'

class ProfileScreen extends Component {
    render () {
        const {settingsClick} = this.props;
        return (
            <View style={styles.container}>
                {/*  =======   header container  ======*/}
                <View style={styles.header}>
                    <TouchableOpacity onPress={settingsClick} style={styles.touchableOpacityStyle}>
                     <Image source={settingImage} style={{flex:1, height:undefined, width:undefined, resizeMode:"contain"}}/>
                    </TouchableOpacity>
                    <Text style={{alignSelf:'center', color:NAMED_COLORS.white}}>Perfil</Text>
                    <TouchableOpacity onPress={settingsClick} style={styles.touchableOpacityStyle}>
                     <Image source={settingImage} style={{flex:1, height:undefined, width:undefined, resizeMode:"contain"}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.headerBottom}>

                </View>
                <View style={{flex:0.7}}>
                    
                </View>
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
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight: 10,
    },
    headerBottom: {
        flex:0.18, 
    },
    touchableOpacityStyle:{
        height:30,
        width:30, 
        alignSelf:'center'
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
  });

export default ProfileScreen