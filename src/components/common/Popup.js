import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog";
import { fonts } from "../../styles";
import { BlackButton } from './BlackButton';
import { NAMED_COLORS } from "../../common/AppColors";

class Popup extends Component {
 state = {
  dialogVisible: false,
  borderBottomWidth: 1, text: ''
 };

 onFocus() {
  this.setState({
   borderBottomWidth: 2,
   borderBottomColor: 'red',
   backgroundColor: 'green'
  })
 };

 onBlur() {
  this.setState({
   borderBottomWidth: 1,
   borderBottomColor: '#DBE5E1',
  })
 };

 showDialog = () => {
  this.setState({ dialogVisible: true });
 };

 handleCancel = () => {
  this.setState({ dialogVisible: false });
 };

 handleDelete = () => {
  if (this.state.text == 'Eliminar') {
    this.setState({ dialogVisible: false});
    this.props.CancelSubscription()        
    this.props.navigation.goBack()
  }
 };

 render() {
  const {
   text
  } = this.props;
  return (
   <View>
    <BlackButton
     onPress={this.showDialog}
     color={'white'}
     backgroundColor={NAMED_COLORS.orangeColor}
    >
     <Text toUpperCase={true}>cancelar Subscripcion</Text>
    </BlackButton>
    <Dialog.Container visible={this.state.dialogVisible} contentStyle={{ borderRadius: 7, padding: 10, paddingBottom: 15 }} footerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'center' }} buttonSeparatorStyle={{ backgroundColor: 'yellow' }}>
     <Dialog.Title style={{ color: '#6c6c6c', fontFamily: fonts.esp, fontWeight: '600', textAlign: 'center', fontSize: 15, }}>
      Para cancelar Subscripcion, por favor escriba: Eliminar
            </Dialog.Title>
     <Dialog.Input
      onBlur={() => this.onBlur()}
      onFocus={() => this.onFocus()}
      name="confirm" onChangeText={(val) => this.setState({ text: val })} style={[{ borderWidth: 1, borderColor: '#DBE5E1', textAlign: 'center' }, { borderBottomColor: this.state.borderBottomColor, borderBottomWidth: this.state.borderBottomWidth }]} />
     <Dialog.Button
      label="Enviar" onPress={this.handleDelete} style={{ backgroundColor: 'red', marginRight: 2, borderRadius: 20, color: 'white', fontFamily: fonts.esp, fontSize: 12, paddingVertical: 10, paddingHorizontal: 20 }} />
     <Dialog.Button label="Cancel" onPress={this.handleCancel} style={{ backgroundColor: '#A7A7A7', marginLeft: 2, borderRadius: 20, color: 'white', fontFamily: fonts.esp, fontSize: 12, paddingVertical: 10, paddingHorizontal: 20 }} />
    </Dialog.Container>
   </View>
  );
 }
}

export { Popup };