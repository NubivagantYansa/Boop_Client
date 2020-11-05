import React from "react";
import { Link } from "react-router-dom";
import { deleteProfile } from "../../services/userService";
import { useUser } from "../context/userContext";

const DeleteProfile = () => {
  const { user, handleLogout } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = user._id;
    handleLogout();
    return deleteProfile(userId);
  };
  return (
    <>
      <h1>Delete profile page</h1>
      <div className='box'>
        <p>Are you sure you want to delete your profile?</p>
        <form onSubmit={handleSubmit}>
          <button className='button is-danger'>Delete</button>
        </form>
        <div>
          <Link to='/dashboard'>Back</Link>
        </div>
      </div>
    </>
  );
};

export default DeleteProfile;
