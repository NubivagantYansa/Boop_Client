import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useUser();
  return (
    <div
      className=' navbar navbar-expand-md navbar-dark'
      id='navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <span className='logo-container'>
        {/* <div className='navbar-brand' id='navbar-logo'>
          {
            <Link to='/'>
              <img src='/images/Logo project 3 (1).png' alt='logo' />
            </Link>
          }
        </div> */}
        <div className='navbar-brand' id='navbar-logo'>
          {
            <Link to='/'>
              <img src='/images/Logo boop.png' alt='logo' />
            </Link>
          }
        </div>
      </span>

      <button
        className='navbar-toggler collapsed'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExample04'
        aria-controls='navbarsExample04'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className=' navbar-collapse collapse' id='navbarsExample04'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to='/dashboard'>
                  <span id='link'>Dashboard</span>
                </Link>
              )}
              <span className='sr-only'> (current)</span>
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {!isAuthenticated && (
                <Link to='/signup'>
                  <span id='link'>Signup</span>
                </Link>
              )}
              <span className='sr-only'> (current)</span>
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {!isAuthenticated && (
                <Link to='/login'>
                  <span id='link'>Login</span>
                </Link>
              )}
              <span className='sr-only'> (current)</span>
            </div>
          </li>
          <li className='nav-item active'>
            <div className='nav-link'>
              {isAuthenticated && (
                <Link to={"/"} onClick={handleLogout}>
                  <span id='link'>Logout</span>
                </Link>
              )}
              <span className='sr-only'> (current)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
