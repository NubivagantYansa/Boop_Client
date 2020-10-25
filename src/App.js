import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession, userLogout } from "./services/userService";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "bulma/css/bulma.css";
import EditProfile from "./Pages/EditProfile";
import DeleteProfile from "./Pages/DeleteProfile";
import Board from "./Pages/Board";
import EditPassword from "./Pages/EditPassword";
import ProfileDetails from "./Pages/ProfileDetails";
class App extends React.Component {
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
    this.setState({
      authenticated: true,
      user,
    });
    console.log("this state on authenticate", this.state);
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
    const { authenticated, user } = this.state;
    return (
      <div className='App container'>
        <BrowserRouter>
          <Navbar
            authenticated={authenticated}
            handleLogout={this.handleLogout}
          />
          <Switch>
            <AnonRoute
              exact
              path='/'
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Home}
            />
            <AnonRoute
              exact
              path='/login'
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Login}
            />
            <AnonRoute
              exact
              path='/signup'
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Signup}
            />
            <PrivateRoute
              exact
              path='/dashBoard'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              component={Dashboard}
            />
            <PrivateRoute
              exact
              path='/board'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              component={Board}
            />
            <PrivateRoute
              exact
              path='/edit-profile'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              component={EditProfile}
            />
            <PrivateRoute
              exact
              path='/delete-profile'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              handleLogout={this.handleLogout}
              component={DeleteProfile}
            />
            <PrivateRoute
              exact
              path='/edit-password'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              component={EditPassword}
            />
            <PrivateRoute
              exact
              path='/profile/:id'
              authenticated={authenticated}
              authenticate={this.authenticate}
              user={localStorage.getItem("accessToken") ? user : ""}
              component={ProfileDetails}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
