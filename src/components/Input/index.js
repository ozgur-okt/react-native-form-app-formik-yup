import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        // secureTextEntry={props.password}
        underlineColorAndroid="rgba(0,0,0,0)"
        style={styles.input}
        autoCapitalize="none"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholderTextColor="#98B4AA" 
      />
    </View>
  );
};



const styles = StyleSheet.create({
  inputContainer: {
    // position: 'absolute',
    width: '100%',
    borderWidth: 2,
    borderRadius:8, 
  },

  input: {
    textAlign: 'center',
    height: 30,
  }
});

export default Input;
