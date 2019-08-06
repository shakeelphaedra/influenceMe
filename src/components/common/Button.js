import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children, propStyles, textStyle, onLongPress}) =>{
    return(
        <TouchableOpacity 
            onPress={onPress}
            onLongPress={onLongPress}
            style={propStyles}
        >
            <Text
                style={textStyle}
                >{children}
            </Text>        
        </TouchableOpacity>
    )
}

const styles ={

    butttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        fontSize: 20,
        color: '#007aff',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}
export { Button};