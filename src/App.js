//React
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//style files
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./BoopTheme.css";

//Routes
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";

//platform components
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Board from "./components/Pages/Board";
import Dashboard from "./components/Pages/Dashboard";
import EditProfile from "./components/Pages/EditProfile";
import DeleteProfile from "./components/Pages/DeleteProfile";
import EditPassword from "./components/Pages/EditPassword";
import ProfileDetails from "./components/Pages/ProfileDetails";
import { UserWrapper } from "./components/context/userContext";

// chat components
import Join from "./components/Pages/Chat/Join";
import Chat from "./components/Pages/Chat/Chat";

const App = () => {
  return (
    <div className='App'>
      <UserWrapper>
        <BrowserRouter>
          <Navbar />
          <Switch>
            {/* 
            
                              Public Routes
            
            */}
            <AnonRoute exact path='/' component={Home} />
            <AnonRoute exact path='/login' component={Login} />
            <AnonRoute exact path='/signup' component={Signup} />
            {/* 
            
                              Private Routes
            
            */}
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/board' component={Board} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
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

            {/* 
            
                                    Chat routes 
            
            */}
            <PrivateRoute exact path='/join' component={Join} />
            <PrivateRoute exact path='/chat' component={Chat} />
          </Switch>
        </BrowserRouter>
      </UserWrapper>
    </div>
  );
};

export default App;
