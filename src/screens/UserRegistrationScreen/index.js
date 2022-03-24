import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons'; 


import Button from '../../components/Button';
import Input from '../../components/Input';
import validate from '../../utils/FormValidations/registrationValidation';



export default class UserRegistration extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <FontAwesome5 name="react" size={85} color="#39AEA9" style={{marginTop:50,}} />        
          <Formik
            initialValues={{
              email: '',
              password: '',
              passwordConfirm: ''
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);  
              resetForm({});
            }}
            validate={validate}
          >
            {({ handleSubmit, handleChange, errors, values, touched }) => (
              <View style={styles.formWrapper}>
                <View style={styles.inputWrapper}>
                  <Input
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}                  
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorInput}>
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Input
                    placeholder="Password"
                    password
                    onChangeText={handleChange('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorInput}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  
                  <Input
                    placeholder="Confirm Password"                   
                    password
                    onChangeText={handleChange('passwordConfirm')}
                    value={values.passwordConfirm}
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <Text style={styles.errorInput}>
                      {errors.passwordConfirm}
                    </Text>
                  )}
                </View>
                <Button onClick={handleSubmit} text="Register" />
              </View>
            )}
          </Formik>       
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#557B83",
    width: '100%'
  },
 
  formWrapper: {
    marginBottom:40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  
  inputWrapper: {
    marginBottom:48,
    width: 180
  },

  errorInput: {
    position:"absolute",
    color: '#D82148',
    textAlign: 'center',
    marginTop:40,
    fontWeight:"bold",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
  }
});
