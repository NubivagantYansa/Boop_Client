import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useUser();
  return (
    <div className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          {
            <Link to='/'>
              <img src='/images/Frame 1.jpg' alt='logo' />{" "}
            </Link>
          }
        </div>
      </div>
      <div className='navbar-start'>
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
