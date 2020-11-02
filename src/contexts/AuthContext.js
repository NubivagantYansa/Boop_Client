import React, { createContext, Component } from "react";
import { userLogout, validateSession } from "../services/userService";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    authenticated: false,
    user: {},
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      validateSession(accessToken)
        .then((response) => {
          this.authenticate(response.session.userId);
        })
        .catch((err) => console.log("Access token error", err));
    }
  };

  authenticate = (user) => {
    return this.setState({
      authenticated: true,
      user,
    });
  };

  handleLogout = () => {
    userLogout(localStorage.getItem("accessToken"));
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    return (
      <div>
        <AuthContext.Provider
          value={{
            ...this.state,
            authenticate: this.authenticate,
            handleLogout: this.handleLogout,
          }}
        >
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}
