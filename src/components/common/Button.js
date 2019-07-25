import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) =>{
    return(
        <TouchableOpacity 
            style={styles.butttonStyle}
            onPress={props.onPress}
        >
            <Text>{props.children}</Text>        
        </TouchableOpacity>
    )
}

const styles ={

    butttonStyle: {
        flex: 1,
        flexDirection: 'column',
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