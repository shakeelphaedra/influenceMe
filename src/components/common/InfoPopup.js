import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import { fonts } from "../../styles";
import { NAMED_COLORS } from "../../common/AppColors";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';


class InfoPopup extends Component {
  renderIcon() {
    switch (this.props.tick) {
      case true:
        return (
          <View style={{ borderColor: '#ecf7e7', borderWidth: 5, borderRadius: 70, padding: 20, marginBottom: 20 }}>
            <FontAwesomeIcon icon={faCheck} size={50} color="#a5da89" />
          </View>
        )
      case "cross":
        return (
          <Icon name="uniF15D" size={90} color="#f07577" style={{ marginBottom: 20, fontWeight: '900' }} />
        )
      default:
        return (
          <View style={{ borderColor: '#f9ceab', borderWidth: 5, borderRadius: 70, padding: 20, marginBottom: 20 }}>
            <FontAwesomeIcon icon={faExclamation} size={50} color="#f7bb89" />
          </View>
        )
    }
  }

  renderNoButton() {
    if (this.props.noButtonText)
      return (
        <TouchableOpacity onPress={this.props.noHandler} style={[{ backgroundColor: 'black', borderRadius: 20, color: 'white', fontFamily: fonts.esp, fontSize: 13, paddingVertical: 10, paddingHorizontal: 30, marginLeft: 5 }, this.props.noButtonStyle]} >
          <Text style={{ color: 'white' }}>{this.props.noButtonText}</Text>
        </TouchableOpacity>
      )
  }

  render() {
    const { visible, heading, description, yesHandler, border, noHandler, yesButtonStyle, yesButtonText, noButtonStyle, noButtonText } = this.props;
    return (
      <Dialog.Container visible={visible} contentStyle={{ borderRadius: 7, padding: 10, paddingBottom: 15, width: '95%' }} footerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} buttonSeparatorStyle={{ backgroundColor: 'yellow' }}>
        <View style={{ alignItems: 'center', paddingHorizontal: this.props.tick == "cross" ? '2%' : '4%' }}>
          {this.renderIcon()}
          <Text style={{ color: '#6c6c6c', fontWeight: '600', textAlign: 'center', fontSize: 17, fontFamily: fonts.esp_bold, flexDirection: 'column', alignItems: 'center' }}>
            {heading}
          </Text>
          {description ? <Text style={{ flexWrap: 'nowrap', flexDirection: 'row', fontFamily: fonts.esp, marginTop: 20, fontSize: 17, alignSelf: 'center', color: '#bebebe', marginTop: 5, textAlign: 'center' }}>{description}</Text> : null}
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: '6%' }}>
          <View style={{ borderWidth: border == "no" ? 0 : 1, borderColor: 'black', borderRadius: 55, padding: 2, alignItems: 'center', justifyContent: 'center', marginRight: 2, }}>
            <TouchableOpacity onPress={yesHandler} style={[{ backgroundColor: NAMED_COLORS.orangeColor, alignItems: 'center', justifyContent: 'center', borderRadius: 20, color: 'white', fontFamily: fonts.esp, fontSize: 13, paddingHorizontal: 30, paddingVertical: 10 }, yesButtonStyle]}>
              <Text style={{ color: 'white' }}>{yesButtonText}</Text>
            </TouchableOpacity>
          </View>
          {this.renderNoButton()}
        </View>
      </Dialog.Container>
    )
  }
}

export default InfoPopup;