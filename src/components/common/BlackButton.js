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
                propStyles={[
                        {color: this.props.color,
                            fontFamily: 'Esphimere',
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
                        },this.props.style]
                }
                textStyle={[styles.textColor,{color: this.props.color}]}
                onPress={this.props.onPress} 
                backgroundColor={this.props.backgroundColor}
            >{this.props.children}
            </Button>
        )
    }
}

const styles = { 
    white: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: 'Esphimere',
    },
    orangeColorButton: {
        backgroundColor: 'black',
        padding: 20,
        margin: 10, 
        fontSize: 30,
        borderRadius: 50,
        fontWeight: 'bold',
        fontFamily: 'Esphimere',
        paddingLeft: 35,
        paddingRight: 35,
    },
    textColor: {
        fontSize: 20,
        fontFamily: 'Esphimere',
        fontWeight: "400"
    }
}

export {BlackButton} 