import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useUser();
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
          {isAuthenticated && <Link to='/dashboard'> Your dashboard </Link>}
        </div>
      </div>
      <div className='navbar-end'>
        <div className='navbar-item'>
          {!isAuthenticated && <Link to='/signup'> Signup </Link>}
        </div>
        <div className='navbar-item'>
          {!isAuthenticated && <Link to='/login'> Login </Link>}
        </div>
        <div className='navbar-item'>
          {isAuthenticated && (
            <Link to={"/"} onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
