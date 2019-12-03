import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      underlineColorAndroid={props.underlineColorAndroid}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    height: 40,
    minWidth: 300,
    borderColor: "#DF0174",
    fontSize: 25,
    borderWidth: 1,
    height: 70
  }
});

export default Input;
