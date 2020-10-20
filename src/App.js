import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProfilesBoard from "./Pages/ProfilesBoard";
import Signup from "./Pages/Signup";

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
          console.log(response, "RESPONSE");
          this.authenticate(response.session.userId);
        })
        .catch((err) => console.log("Access token", err));
    }
  };

  authenticate = (user) => {
    this.setState({
      authenticated: false,
      user,
    });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className='App'>
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
              component={Dashboard}
            />
            <PrivateRoute
              exact
              path='/profilesBoard'
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={ProfilesBoard}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
