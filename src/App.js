import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">{userName || "登录"}</Link>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <PrivateRoute path="/user" component={UserPage} />
            {/* <Route path="/user" component={UserPage} /> */}
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(state => ({ userName: state.userName }))(App);
