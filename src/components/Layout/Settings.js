import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className=' d-flex flex-column '>
      <div className='mb-3 btn-group d-block d-flex flex-column align-items-center container shadow p-3 card-background'>
        <span>
          <p className='lead'>Begin your search!</p>
        </span>
        {
          <Link to='/board'>
            <button className='m-1 btn info rounded'>Search profiles</button>
          </Link>
        }
      </div>
      <div className='mt-3 btn-group d-block d-flex flex-column align-items-center container shadow p-3 card-background'>
        {
          <Link to='/delete-profile'>
            <button className='m-1 btn danger rounded'>Delete Profile</button>
          </Link>
        }
        {
          <Link to='/edit-password'>
            <button className='m-1 btn info rounded'>Edit Password</button>
          </Link>
        }
        {
          <Link to='/edit-profile'>
            <button className='m-1 btn info rounded'>Edit Profile</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Settings;
