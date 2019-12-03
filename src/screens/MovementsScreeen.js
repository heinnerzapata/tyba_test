import React, { Component } from "react";
import Movements from "./../containers/Movements";
import { connect } from "react-redux";

class MovementsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Movements
        navigate={navigate}
        movements={this.props.movements}
        logState={this.props.logState}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movements: state.session.movements,
    logState: state.session.logState
  };
};

export default connect(mapStateToProps)(MovementsScreen);
