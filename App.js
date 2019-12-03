import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreeen from "./src/screens/LoginScreen";
import RegisterScreeen from "./src/screens/RegisterScreeen";
import RestaurantsScreen from "./src/screens/RestaurantsScreen";
import MovementsScreen from "./src/screens/MovementsScreeen";

import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreeen },
  Register: { screen: RegisterScreeen },
  Restaurants: { screen: RestaurantsScreen },
  Movements: { screen: MovementsScreen }
});

let store = configureStore();

const AppContainer = createAppContainer(MainNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
