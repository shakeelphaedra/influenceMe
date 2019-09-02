import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { fonts } from '../styles';
screenWidth = Dimensions.get("window").width;

export default class SearchInput extends Component {
    state ={phone: ''}
    
    handleFocus = () => {
        this.setState({isFocused: true})
    }

    handleBlur = () => this.setState({isFocused: false})

    renderErrors = (meta, errorTextColor) => {
        const { errorTextStyle } = styles;
        if (meta.touched && meta.error) {
            return (
                <Text style={[errorTextStyle, { color: (errorTextColor ? errorTextColor : "#fff") }]}>{meta.error}</Text>
            );
        }
    };
    
    render () {
        const {
            meta,
            input,
            value,
            editable,
            maxLength,
            placeholder,
            onChangeText,
            keyboardType,
            blurOnSubmit,
            returnKeyType,
            errorTextColor,
            onSubmitEditing,
            secureTextEntry,
            customInputStyle,
            selectTextOnFocus,
            placeholderTextColor,
            customContainerStyle,
            ...inputProps
        } = this.props;
        return (
            <View style={{}}>
                <View style={[styles.containerStyle, customContainerStyle]}>
                <TextField
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#000'}
                        style={[styles.inputStyle, customInputStyle]}
                        selectTextOnFocus={selectTextOnFocus}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        underlineColorAndroid={'transparent'}
                        onSubmitEditing={onSubmitEditing}
                        ref="textSearch"
                        secureTextEntry={secureTextEntry}
                        returnKeyType={returnKeyType}
                        keyboardType={keyboardType}
                        blurOnSubmit={blurOnSubmit}
                        onChangeText={val =>onChangeText(val)}
                        maxLength={maxLength}
                        editable={editable}
                        value={"why"}
                        baseColor={'white'}
                        tintColor={'white'}
                        {...input}
                    />
                    
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 30,
        width: screenWidth/2.5, 
        marginTop: -20,
        paddingTop: 0,
        borderRadius: 0,
    },
    inputStyle: {
        fontSize: 12,
        flex: 1,
        fontFamily: fonts.esp,
        position: 'relative',
        top: 0,
        width: 100,
        textAlign: "left",
        color: "white"
    },

    errorContainerStyle: {
        // flex: 1,
    },
    errorTextStyle: {
        position: 'absolute',
        top: 0,
        right: 20,
        textAlign: 'right',
        color: '#fff',
        fontSize: 12,
        fontWeight: '400'
    },
    imageStyle: {
        top: 14,
        marginLeft: 5
    }
};
