import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { isLogin, path, component } = this.props;
    if (isLogin) {
      return <Route path={path} component={component} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { redirect: path }
          }}
        />
      );
    }
  }
}

export default connect(
  //mapStateToProps,
  state => ({ isLogin: state.isLogin })
  //mapDispatchToProps
)(PrivateRoute);
