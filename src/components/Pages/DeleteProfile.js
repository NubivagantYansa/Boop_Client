import React from "react";
import { Link } from "react-router-dom";
import { deleteProfile } from "../../services/userService";
import { useUser } from "../context/userContext";
import "./DeleteProfile.css";

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
      <div className='container delete-background-image'>
        <p>Are you sure you want to delete your profile?</p>
        <form onSubmit={handleSubmit}>
          <button className='btn danger'>Delete</button>
        </form>
        <button className='btn info' id='link'>
          <Link to='/dashboard'>Back</Link>
        </button>
      </div>
    </>
  );
};

export default DeleteProfile;
