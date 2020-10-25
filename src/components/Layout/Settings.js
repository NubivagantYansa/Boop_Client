import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className='column is-flex-direction-column'>
      <div className='box buttons is-flex-direction-column  '>
        {
          <Link to='/delete-profile'>
            <button className='button is-danger is-rounded'>
              Delete Profile
            </button>
          </Link>
        }
        {
          <Link to='/edit-password'>
            <button className='button is-link is-rounded'>Edit Password</button>
          </Link>
        }
        {
          <Link to='/edit-profile'>
            <button className='button is-link is-rounded'>Edit Profile</button>
          </Link>
        }
      </div>

      <div className='box buttons is-flex-direction-column'>
        <span>
          <h1>Begin your search!</h1>
        </span>
        {
          <Link to='/board'>
            <button className='button is-info is-rounded m-2'>
              Search profiles
            </button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Settings;
