import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import Formsy from "formsy-react-native";
import Title from "./../components/Title";

class TextField extends React.Component {
  handleChange = text => this.props.setValue(text);

  maybeRenderErrorMessage = () => {
    let errorMessage = this.props.getErrorMessage();

    if (!this.props.isPristine() && errorMessage) {
      return <Text style={{ color: "#420174" }}>{errorMessage}</Text>;
    }
    return null;
  };

  render() {
    const localStyles = this.props.isFormInvalid() ? styles.error : undefined;

    return (
      <View style={styles.container}>
        <View style={{ marginLeft: -20 }}><Title isSmall={false}>{this.props.title}</Title></View>
        <TextInput
          onChangeText={this.handleChange}
          value={this.props.getValue()}
          style={styles.input}
          secureTextEntry={this.props.secureTextEntry}
        />
        {this.maybeRenderErrorMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    width: 300,
    height: 100,
    marginBottom: 20
  },
  input: {
    backgroundColor: "white"
  },
  error: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#420174"
  },
  input: {
    marginTop: -20,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10
  }
});

export default Formsy.withFormsy(TextField);
