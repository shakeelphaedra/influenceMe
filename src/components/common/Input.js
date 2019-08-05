import React , {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({label,value, onChangeText,placeholder,secureTextEntry,keyboardType, onPress}) => {
    return(
        <View style={styles.containerStyle}>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                onPress={onPress}
                value={value}
                keyboardType={keyboardType}
                autoCapitalize={'none'}
                onChangeText={onChangeText}
            />
        </View>
    )
}
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export {Input}
