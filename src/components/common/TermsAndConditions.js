import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { fonts } from '../../styles';
import Dialog from 'react-native-dialog';
import { NAMED_COLORS } from '../../common/AppColors';

class TermsAndConditions extends Component {
  render() {
    const { showTerms, showDialog, acceptTerms } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={showTerms}>
          <Text style={{ fontSize: 15, fontFamily: fonts.esp }}> Acepto los términos y condiciones</Text>
        </TouchableOpacity>
        <Dialog.Container visible={showDialog} contentStyle={{ borderRadius: 0, paddingBottom: 0, paddingTop: 0, width: '85%', margin: 0 }} buttonSeparatorStyle={{ backgroundColor: 'yellow' }}>
          <View style={{ alignItems: 'center', paddingHorizontal: this.props.tick == "cross" ? '2%' : '4%', padding: 25, paddingBottom: 0, paddingTop: 0, }}>
            <Text style={{ color: NAMED_COLORS.black, textAlign: 'center', fontSize: 26, fontFamily: fonts.esp_bold, flexDirection: 'column', alignItems: 'center', padding: 10 }}>
              Términos y Condiciones
            </Text>
          </View>
          <ScrollView style={{ height: '60%', marginTop: 20, padding: 10, paddingTop: 0 }}>
            <Text style={{ flexWrap: 'nowrap', flexDirection: 'row', fontFamily: fonts.esp, marginTop: 20, fontSize: 15, lineHeight: 20, alignSelf: 'center', color: NAMED_COLORS.blackish, marginTop: 5, textAlign: 'justify' }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </Text>
          </ScrollView>
          <View style={{ alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end', margin: 5 }}>
            <View style={{ padding: 2, alignItems: 'center', justifyContent: 'center', }}>
              <TouchableOpacity style={[{
                alignItems: 'center', justifyContent: 'center', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10,
                shadowOffset: { width: 0, height: 2, },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 5,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                backgroundColor: NAMED_COLORS.orangeColor
              }]} onPress={acceptTerms}>
                <Text style={{ color: 'white', fontFamily: fonts.esp, fontSize: 16 }}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Dialog.Container>
      </View>
    )
  }
}

export { TermsAndConditions }