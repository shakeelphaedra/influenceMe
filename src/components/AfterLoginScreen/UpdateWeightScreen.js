import React, { Component } from 'react';
import { View, Text, Image, Picker, StyleSheet, Item, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '../../common/Input';
import { Field, reduxForm } from 'redux-form'
import { NAMED_COLORS } from '../../common/AppColors';
import settingImage from '../../assets/www/dist/img/settings-outline.png'
import defaultUser from '../../assets/www/dist/img/userM.png';
import { BlackButton, PickerSelect, TextInputRoundCorner } from '../common';
import Icon from '../common/Icon';
import firebase from 'react-native-firebase';
import { fonts } from '../../styles';
let Screenheight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

class UpdateWeightScreen extends Component {

  render() {
    const { _handleSubmit, handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        {/*  =======   header container  ======*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.touchableOpacityStyle}>
            <Icon name='uniF1F9' color='white' size={28} />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: NAMED_COLORS.white, fontFamily: fonts.esp, fontSize: 12 }}>Cambiar Unidad</Text>
          <TouchableOpacity onPress={() => { }} style={styles.touchableOpacityStyle}>
          </TouchableOpacity>
        </View>
        {/* ============= header end ============= */}

        <View style={{ height: 200, padding: 40 }}>
          <Text style={{ fontFamily: fonts.esp, fontSize: 10, color: 'white' }}>Peso</Text>
          <Text style={{ fontFamily: fonts.esp, fontSize: 12, color: 'red', marginVertical: 15 }}>{this.props.weightVal} {this.props.weightScale}</Text>
          <Field
            name='weightVal'
            errorTextColor="red"
            keyboardType='numeric'
            placeholder="cambiar la  altura"
            component={TextInputRoundCorner}
          />
          <Field
            name='weightScale'
            component={PickerSelect}
            keyboardType='default'
          >
            <Picker.Item label="Seleccione Unidad" value=" " style={{ width: '110%' }} />
            <Picker.Item label="LBS" value="lbs" style={{ width: '110%' }} />
            <Picker.Item label="KG" value="kg" style={{ width: '110%' }} />
          </Field>
          <BlackButton
            type="submit"
            onPress={handleSubmit(_handleSubmit)}
            color={'white'}
            backgroundColor={NAMED_COLORS.orangeColor}
            style={{ marginTop: 40 }}
            textSize={14}
          >
            ACTUALIZAR
                    </BlackButton>
        </View>
      </View>
    )
  }
}

const validate = values => {
  const errors = {};
  return errors;
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NAMED_COLORS.backgroundDarkGray
  },
  header: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: NAMED_COLORS.darkGray,
    paddingLeft: 10,
    paddingRight: 10,
  },
  touchableOpacityStyle: {
    flex: 0.1,
    alignSelf: 'center'

  },

  touchableOpacityStyle: {
    flex: 0.5,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    height: Screenheight * 0.06,
    backgroundColor: NAMED_COLORS.darkGray,
    marginBottom: 2,
    marginTop: 2,
    padding: 15
  },
  headingRow: {
    flexDirection: 'row',
    height: Screenheight * 0.06,
    marginBottom: 2,
    marginTop: 2,
    padding: 15
  },
  leftArrowWithText: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftArrowImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain"
  },
  innerTextStyle: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: fonts.esp,
    fontSize: 12,
  },
  input: {
    color: 'white',
    paddingLeft: 30,
    height: 60,
    fontFamily: fonts.esp,
    paddingRight: 30,
  },

  userPic: {
    height: Screenheight * 0.14,
    alignItems: 'center',
    backgroundColor: NAMED_COLORS.backgroundDarkGray,
    justifyContent: 'center'
  },
});

export default (reduxForm({
  form: 'UpdateWeight',
  enableReinitialize: true,
  validate,
})(UpdateWeightScreen))