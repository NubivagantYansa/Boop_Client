import React from "react";
import { Link } from "react-router-dom";

const Settings = (props) => {
  return (
    <>
      <div className='box'>
        <button>{<Link to='/edit-profile'> Edit Profile </Link>}</button> <br />
        <button>{<Link to='/edit-password'> Edit Password </Link>}</button>
        <br />
        <button>{<Link to='/delete-profile'> Delete Profile </Link>}</button>
      </div>

      <div className='box'>
        <button>{<Link to='/board'> Search profiles </Link>} </button>
      </div>
    </>
  );
};

export default Settings;
