import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Input from "./../components/Input";
import Button from "./../components/Button";
import RestaurantsService from "../api/restaurants.service";
import moment from "moment";

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      restaurants: []
    };

    this.restaurantsService = RestaurantsService;
  }

  handleButton = () => {
    this.restaurantsService
      .getRestaurants(this.state.city)
      .then(result => {
        this.setState({ restaurants: result.results }, () => {
          if (result.results.length > 0) {
            this.props.setMovement(
              `${this.state.city} - ${moment().format("MM/DD/YYYY HH:mm:ss")}`
            );
          }
        });
      })
      .catch(error => {});
  };

  render() {
    const navigate = this.props.navigate;
    return (
      <View style={styles.container}>
        <Text style={styles.user}>
          {this.props.userData ? this.props.userData.email : ""} !!
        </Text>
        <Button
          text={"Home"}
          onPress={() => {
            this.props.navigate("Home", {});
          }}
        />
        <Input
          placeholder={"City name"}
          onChangeText={city => this.setState({ city })}
          value={this.state.city}
        />
        <Button text={"Search"} onPress={this.handleButton} />
        <FlatList
          style={styles.list}
          data={this.state.restaurants}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Text style={styles.listItem} key={item.name}>
              {item.name}
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
    alignItems: "center"
  },
  title: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 25
  },
  user: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 15
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

export default Restaurants;
