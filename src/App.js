import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import "./BoopTheme.css";
import Navbar from "./components/Layout/Navbar";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import EditProfile from "./components/Pages/EditProfile";
import DeleteProfile from "./components/Pages/DeleteProfile";
import Board from "./components/Pages/Board";
import EditPassword from "./components/Pages/EditPassword";
import ProfileDetails from "./components/Pages/ProfileDetails";
import { UserWrapper } from "./components/context/userContext";
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <UserWrapper>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <AnonRoute exact path='/' component={Home} />
              <AnonRoute exact path='/login' component={Login} />
              <AnonRoute exact path='/signup' component={Signup} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/board' component={Board} />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/delete-profile'
                component={DeleteProfile}
              />

              <PrivateRoute
                exact
                path='/edit-password'
                component={EditPassword}
              />
              <PrivateRoute
                exact
                path='/profile/:id'
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
