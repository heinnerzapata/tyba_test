import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./../components/Button";
import Formsy from "formsy-react-native";
import TextField from "./../components/TextField";
import Title from "./../components/Title";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmitForm = data => {
    if (
      data.email === this.props.userData.email &&
      data.password === this.props.userData.password
    ) {
      this.props.setLogState(true);
      this.props.navigate("Home", {});
    } else {
    }
  };

  render() {
    const { navigate } = this.props.navigate;
    return (
      <View style={styles.container}>
        <Title isSmall={false}>Login</Title>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmitForm}>
          <TextField
            placeholder="Email"
            name="email"
            title="Email"
            validations="isEmail"
            validationErrors={{
              isDefaultRequiredValue: "This is a required field.",
              isEmail: "invalid email"
            }}
            required
          />
          <TextField
            placeholder="Password"
            name="password"
            title="Pasword"
            validations="minLength:2"
            secureTextEntry
            validationErrors={{
              isDefaultRequiredValue: "This is a required field.",
              minLength: "Field must have a length of 2."
            }}
            required
          />
        </Formsy.Form>
        <Button
          text={"Submit"}
          onPress={() => {
            this.refs.form.submit();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  test: {
    height: 120
  },
  error: {
    marginTop: 30
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    width: 100
  }
});

export default Login;
