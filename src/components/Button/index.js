import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: 44,
    width: 90,
    backgroundColor: '#39AEA9',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300
  },
  buttonText: {
    color: 'white'
  }
});

export default Button;
