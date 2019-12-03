import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./../components/Button";
import Title from "./../components/Title";
import BackgroundImage from "./../components/Back";

class Home extends Component {
  render() {
    const navigate = this.props.navigate;
    return (
      <BackgroundImage
        source={require('../images/back.jpg')}
      >
        <View style={styles.container}>
          <Title isSmall={false}>HZ Enginner Test</Title>
          {!this.props.logState && (
            <View>
              <Button text={"Login"} onPress={() => navigate("Login", {})} />
              <Button
                text={"Register"}
                onPress={() => navigate("Register", {})}
              />
            </View>
          )}
          {this.props.logState && (
            <View style={styles.container}>
              <Button
                text={"Restaurants"}
                onPress={() => navigate("Restaurants", {})}
              />
              <Button
                text={"Movements"}
                onPress={() => navigate("Movements", {})}
              />
              <Button
                text={"LogOut"}
                onPress={() => {
                  this.props.setLogState(false);
                }}
              />
              <Text>
                User registered -
                <Text style={styles.user}>{this.props.userData.email}</Text>
              </Text>
            </View>
          )}
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 25
  },
  user: {
    fontWeight: "bold"
  }
});

export default Home;
