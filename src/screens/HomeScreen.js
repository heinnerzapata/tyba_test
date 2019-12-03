import React, { Component } from "react";
import Home from "./../containers/Home";
import { connect } from "react-redux";
import { setLogState } from "./../store/actions/index";

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Home
        navigate={navigate}
        userData={this.props.userData}
        logState={this.props.logState}
        setLogState={this.props.setLogState}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: { email: state.session.email, password: state.session.password },
    logState: state.session.logState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogState: newState => {
      return dispatch(setLogState(newState));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
