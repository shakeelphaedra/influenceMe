import React, {Component} from 'react';
import {Button} from './index';

class BlackButton extends Component {
    render () {
        return (
            <Button propStyles={styles.blackButton} onPress={this.props.onPress} >EMPEZER</Button>
        )
    }
}

const styles = { 
    blackButton: {
        color: '#FF0000',
        backgroundColor: 'black',
        padding: 20,
        margin: 10, 
        fontSize: 30,
        borderRadius: 50,
        fontWeight: 'bold',
        paddingLeft: 35,
        paddingRight: 35,
    }
}

export {BlackButton} 