import React, {Component} from 'react';
import {Button} from './index';

class WhiteButton extends Component {
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }
    render () {
        return (
            <Button 
                propStyles={
                    this.state.pressStatus
                        ? styles.orangeColorButton
                        : styles.blackButton
                }
                onLongPress={() => this.setState({ pressStatus: true })}
                textStyle={
                    this.state.pressStatus
                        ? styles.white
                        : styles.textColor
                    }
                onPress={this.props.onPress} 
            >{this.props.children}
            </Button>
        )
    }
}

const styles = { 
    blackButton: {
        color: '#FF0000',
        backgroundColor: 'white',
        padding: 20,
        margin: 10, 
        fontSize: 30,
        borderRadius: 50,
        fontWeight: 'bold',
        paddingLeft: 35,
        paddingRight: 35,
    },
    white: {
        color: 'white',
        fontSize: 20,
        fontWeight: "800"
    },
    orangeColorButton: {
        color: '#FF0000',
        backgroundColor: 'orange',
        padding: 20,
        margin: 10, 
        fontSize: 30,
        borderRadius: 50,
        fontWeight: 'bold',
        paddingLeft: 35,
        paddingRight: 35,
    },
    textColor: {
        color: 'black',
        fontSize: 20,
        fontWeight: "800"
    }
}

export {WhiteButton} 