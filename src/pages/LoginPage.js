import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
  }
  render() {
    const { isLogin, location, login, loading, err } = this.props;
    const { redirect = "/" } = location.state || {};
    if (isLogin) {
      return <Redirect to={redirect} />;
    }
    return (
      <div>
        <h3>LoginPage</h3>
        <input
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
        />
        <button onClick={() => login(this.state.userName)}>
          {loading ? "loading..." : "login"}
        </button>
        <p>{err}</p>
      </div>
    );
  }
}

export default connect(
  //mapStateToProps,
  state => ({ isLogin: state.isLogin, loading: state.loading, err: state.err }),
  //mapDispatchToProps
  // {
  //   login: userName => dispatch => {
  //     dispatch({ type: "loginRequest" });
  //     setTimeout(() => {
  //       console.log("userName", userName);
  //       dispatch({ type: "loginSuccess" });
  //     }, 1000);
  //   }
  {
    login: userName => ({ type: "login", payload: { userName } })
  }
)(LoginPage);
