import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Button from "./../components/Button";
import Title from "./../components/Title";

class Movements extends Component {
  render() {
    const navigate = this.props.navigate;
    return (
      <View style={styles.container}>
        <Title isSmall={false}>HZ Enginner Test</Title>
        <Button text={"Home"} onPress={() => navigate("Home", {})} />
        <FlatList
          data={this.props.movements ? this.props.movements : []}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Text style={styles.listItem} key={item.name}>
              {item}
            </Text>
          )}
        />
      </View>
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
  listItem: {
    width: 300,
    maxWidth: 300,
    margin: 5,
    fontSize: 20,
    color: "#420174",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#420174",
    backgroundColor: "#fecfc4",
    padding: 3
  }
});

export default Movements;
