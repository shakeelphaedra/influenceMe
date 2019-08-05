import React, {Component} from 'react';
import {Button} from './index';

class BlackButton extends Component {
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
                        : {
                            color: this.props.color,
                            fontFamily: 'halflings',
                            backgroundColor: this.props.backgroundColor,
                            padding: 10,
                            alignItems: 'center',
                            margin: 10, 
                            zIndex: 444,
                            marginTop: -17,
                            fontSize: 30,
                            borderRadius: 50,
                            paddingLeft: 15,
                            width:  200,
                            alignSelf: 'center',
                            paddingRight: 15,
                        }
                }
                textStyle={
                    this.state.pressStatus
                        ? styles.white
                        : styles.textColor
                    }
                onPress={this.props.onPress} 
                backgroundColor={this.props.backgroundColor}
            >{this.props.children}
            </Button>
        )
    }
}

const styles = { 
    white: {
        color: 'red',
        fontSize: 20,
        fontWeight: "300"
    },
    orangeColorButton: {
        backgroundColor: 'black',
        padding: 20,
        margin: 10, 
        fontSize: 30,
        borderRadius: 50,
        fontWeight: 'bold',
        paddingLeft: 35,
        paddingRight: 35,
    },
    textColor: {
        color: 'red',
        fontSize: 20,
        fontWeight: "400"
    }
}

export {BlackButton} 