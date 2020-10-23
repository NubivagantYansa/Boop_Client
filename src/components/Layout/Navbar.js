import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log("props", props);
  return (
    <div className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-start'>
        <div className='navbar-item'>{<Link to='/'> Logo </Link>}</div>
        <div className='navbar-item'>
          {props.authenticated && <Link to='/dashboard'> Your dashboard </Link>}
        </div>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          {!props.authenticated && <Link to='/signup'> Signup </Link>}
        </div>
        <div className='navbar-item'>
          {!props.authenticated && <Link to='/login'> Login </Link>}
        </div>
        <div className='navbar-item'>
          {props.authenticated && (
            <Link to={"/"} onClick={props.handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
