import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession, userLogout } from "./services/userService";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import "bulma/css/bulma.css";
import EditProfile from "./components/Pages/EditProfile";
import DeleteProfile from "./components/Pages/DeleteProfile";
import Board from "./components/Pages/Board";
import EditPassword from "./components/Pages/EditPassword";
import ProfileDetails from "./components/Pages/ProfileDetails";
import { UserWrapper } from "./components/context/userContext";
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
    const { authenticated, user } = this.state;
    return (
      <div className='App'>
        <UserWrapper>
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
                path='/dashboard'
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
        </UserWrapper>
      </div>
    );
  }
}

export default App;
