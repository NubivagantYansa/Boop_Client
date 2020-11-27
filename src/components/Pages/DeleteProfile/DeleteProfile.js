import React from "react";
import { Link } from "react-router-dom";
import { deleteProfile } from "../../../services/userService";
import { useUser } from "../../context/userContext";
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
      <div className='container delete-background-image p-3 m-3 text-center'>
        <div className='row justify-content-center p-3 m-3'>
          <h3 className='display-4'>
            Are you sure you want to delete your profile?
          </h3>
        </div>
        <div className='row  justify-content-center'>
          <form onSubmit={handleSubmit}>
            <button className='m-2 btn danger'>Delete</button>
          </form>

          <button className='m-2 btn info' id='link'>
            <Link id='link' to='/dashboard'>
              Back
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteProfile;
