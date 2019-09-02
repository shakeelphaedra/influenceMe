import React, { Component } from 'react';
import { Button } from './index';
import { fonts } from '../../styles';

class BlackButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  render() {
    return (
      <Button
        propStyles={[
          {
            color: this.props.color,
            fontFamily: fonts.esp_bold,
            backgroundColor: this.props.backgroundColor,
            padding: 10,
            color: '#d75019',
            alignItems: 'center',
            margin: 10,
            zIndex: 444,
            marginTop: -17,
            fontSize: 30,
            borderRadius: 50,
            width: 200,
            alignSelf: 'center',
          }, this.props.style]
        }
        styleC={this.props.styleC}
        textStyle={[styles.textColor, { color: this.props.color ? this.props.color : styles.textColor.color }, { fontSize: this.props.fontSize ? this.props.fontSize : styles.textColor.fontSize }, this.props.textStyle, { fontSize: this.props.textSize }, this.props.textStyle]}
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
    color: '#d75019',
    fontWeight: "400"
  }
}

export { BlackButton } 