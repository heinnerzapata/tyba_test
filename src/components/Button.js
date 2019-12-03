import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

const Button = props => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#DF0174",
    margin: 10
  },
  text: {
    padding: 25,
    borderColor: "transparent",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    minWidth: 300,
    maxWidth: 300,
    textAlign: "center"
  }
});

export default Button;
