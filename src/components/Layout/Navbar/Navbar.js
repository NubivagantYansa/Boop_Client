import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useUser();
  return (
    <nav
      className='navbar navbar-expand-md navbar-dark overflow-hidden fixed-top'
      id='navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand' id='navbar-logo'>
        <span className='logo-container'>
          {
            <Link to='/'>
              <img src='/images/Boop-white.png' alt='logo' />
            </Link>
          }
        </span>
      </div>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarBoop'
        aria-controls='navbarBoop'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className=' collapse navbar-collapse ' id='navbarBoop'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to='/dashboard'>
                  <span id='link'>Dashboard</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {!isAuthenticated && (
                <Link to='/signup'>
                  <span id='link'>Signup</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {!isAuthenticated && (
                <Link to='/login'>
                  <span id='link'>Login</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to={"/"} onClick={handleLogout}>
                  <span id='link'>Logout</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to='/join'>
                  <span id='link'>Live Chat</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to='/chat'>
                  <span id='link'>Chat</span>
                  <span className='sr-only'> (current)</span>
                </Link>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
