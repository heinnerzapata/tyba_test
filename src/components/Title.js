import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = props => {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 25,
    color: "#ac0174"
  }
});

export default Title;
