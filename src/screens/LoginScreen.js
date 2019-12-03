import React, { Component } from "react";
import Login from "./../containers/Login";
import { setLogState } from "./../store/actions/index";
import { connect } from "react-redux";

class LoginScreeen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Login
        navigate={navigate}
        userData={this.props.userData}
        setLogState={this.props.setLogState}
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
    setLogState: newState => {
      return dispatch(setLogState(newState));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreeen);
