import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            width='112'
            height='28'
          />
        </a>
      </div>
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
