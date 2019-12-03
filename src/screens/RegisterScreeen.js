import React, { Component } from "react";
import Register from "./../containers/Register";
import { connect } from "react-redux";
import { saveUserData } from "./../store/actions/index";

class LoginRegister extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Register
        navigate={navigate}
        userData={this.props.userData}
        setUserData={this.props.setUserData}
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
    setUserData: (email, user) => {
      return dispatch(saveUserData(email, user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegister);
