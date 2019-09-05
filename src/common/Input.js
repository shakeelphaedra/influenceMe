import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { fonts } from '../styles';


export default class InputField extends Component {
    
    handleFocus = () => this.setState({isFocused: true})

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
        that=this
        this.props.input.value = this.props.defaultValue;
        const {
            meta,
            input,
            value,
            defaultValue,
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
                        // placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#000'}
                        style={[styles.inputStyle, customInputStyle]}
                        selectTextOnFocus={selectTextOnFocus}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        underlineColorAndroid={'transparent'}
                        onSubmitEditing={onSubmitEditing}
                        secureTextEntry={secureTextEntry}
                        returnKeyType={returnKeyType}
                        keyboardType={keyboardType}
                        blurOnSubmit={blurOnSubmit}
                        onChangeText={onChangeText}
                        // placeholder={placeholder}
                        value={input.value}
                        maxLength={maxLength}
                        editable={editable}
                        baseColor={'white'}
                        tintColor={'white'}
                        label={
                            "notRequired" ?
                                <Text style={{fontFamily: fonts.esp, fontSize: 12}}>{placeholder}< Text style={{ fontFamily: fonts.esp,color: '#00a0ff', position: 'absolute', top: 0 , fontSize: 12}}></Text></Text>
                                :
                                <Text style={{fontFamily: fonts.esp, fontSize: 12}}>{placeholder}< Text style={{fontFamily: fonts.esp, color: '#00a0ff', position: 'absolute', top: 0 , fontSize: 12}}> *</Text></Text>
    
                        }
                        {...input}
                    />
                    <View style={styles.errorContainerStyle}>{
                        this.renderErrors(meta, errorTextColor)}
                    </View>
                </View>
            </View>
        );
    }
    
}

const styles = {
    containerStyle: {
        paddingHorizontal: 5,
        height: 30,
        borderRadius: 0,
    },
    inputStyle: {
        fontSize: 12,
        flex: 1,
        fontFamily: fonts.esp,
        position: 'relative',
        top: 0,
        textAlign: "left",
        color: "#edebed"
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
