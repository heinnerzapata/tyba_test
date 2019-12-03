import React, { Component } from "react";
import Restaurants from "./../containers/Restaurants";
import { connect } from "react-redux";
import { setMovement } from "./../store/actions/index";

class RestaurantsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Restaurants
        navigate={navigate}
        userData={this.props.userData}
        setMovement={this.props.setMovement}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMovement: newMovement => {
      return dispatch(setMovement(newMovement));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsScreen);
