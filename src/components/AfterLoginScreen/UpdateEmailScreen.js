import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '../../common/Input';
import { Field, reduxForm, initialize } from 'redux-form'
import { NAMED_COLORS } from '../../common/AppColors';
import { BlackButton } from '../common';
import Icon from '../common/Icon';
import firebase from 'react-native-firebase';
import { fonts } from '../../styles';
import { connect } from 'react-redux';
let Screenheight = Dimensions.get('window').height;

class UpdateEmailScreen extends Component {

  state = {
    email: '',
    username: ''
  }
  constructor(props){
    super(props)
  }

  render() {
    const { _handleSubmit, handleSubmit } = this.props;
    return (
      <ScrollView style={styles.container}
      keyboardShouldPersistTaps='handled'
      >
        {/*  =======   header container  ======*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.touchableOpacityStyle}>
            <Icon name='uniF1F9' color='white' size={28} />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: NAMED_COLORS.white, fontFamily: fonts.esp, fontSize: 12 }}>Formulario</Text>
          <TouchableOpacity onPress={() => { }} style={styles.touchableOpacityStyle}>
          </TouchableOpacity>
        </View>
        {/* ============= header end ============= */}

        <View style={styles.userPic}>
          <Icon name='uniF25E' color={'white'} size={60} />
        </View>
        
        <View style={{ height: 600 }}>
          <Field
            name='name'
            errorTextColor="red"
            component={InputField}
            keyboardType='default'
            onChangeText={(val) => this.props.nameChange(val)}
            placeholder="Usuarie"
            customContainerStyle={styles.input}
            customInputStyle={{ color: NAMED_COLORS.orangeColor }}
          />
          <Field
            name='email'
            errorTextColor="red"
            onChangeText={(val) => this.props.emailChange(val)}
            component={InputField}
            keyboardType='email-address'
            placeholder="E-Mail"
            customContainerStyle={styles.input}
            customInputStyle={{ color: NAMED_COLORS.orangeColor }}
          />
          <BlackButton
            type="submit"
            onPress={handleSubmit(_handleSubmit)}
            color={'white'}
            backgroundColor={NAMED_COLORS.orangeColor}
            style={{ marginTop: 40 }}
          >
            ACTUALIZAR
                    </BlackButton>


        </View>
      </ScrollView>

    )
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) {

    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'not valid email!'
  }

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


// Form = reduxForm({ 
//   form: 'UpdateEmail',
//   validate,
// })(UpdateEmailScreen);

// const Form = reduxForm({
//   form: 'UpdateEmail',
//   validate
// },
// mapStateToProps = undefined,
// mapDispatchToProps = function(dispatch) {
//   return {
//       // This will be passed as a property to the presentational component
//       changeFieldValue: function(field, value) {
//           dispatch(change(form, field, value))
//       }
//   }
// })(Form)

// export default connect(state => ({ 
//   initialValues: {
//     email: 'some value here'
//   } 
// }))(Form);


const mapStateToProps = (state, props) => {
  return {
    initialValues: props.initialValues, // retrieve name from redux store 
  }
}

export default connect(
  mapStateToProps
)(reduxForm({
  form: 'UpdateEmail', // a unique identifier for this form
  validate,
  enableReinitialize: true
})(UpdateEmailScreen))