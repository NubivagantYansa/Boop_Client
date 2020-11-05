import React, { useState } from "react";
import { useUser } from "../context/userContext";
import { Link, useHistory } from "react-router-dom";
import { editProfile } from "../../services/userService";
import AddImage from "../Layout/AddImage";
import EditFeatures from "../Layout/EditFeatures";
import Settings from "../Layout/Settings";
import UserInfo from "../Layout/UserInfo";
import "./Dasboard.css";

const EditProfile = () => {
  const { user, authenticate } = useUser();
  const history = useHistory();
  const [image, setImage] = useState(user.image);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    editProfile({ user }, accessToken)
      .then((response) => {
        authenticate(response.user);
        history.push("/dashboard");
        return response;
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Settings />
      <div>
        <h1> Edit {user.username}'s profile</h1>
      </div>

      <div className='box'>
        <div className='box'>
          {/* 
                            image
       */}
          <div className='box'>
            {image && <img className='image' src={image} />}
            <AddImage addImage={(image) => setImage(image)} />
          </div>
          {/* 
                            edit form
       */}
          <form onSubmit={handleSubmit}>
            <div className='box'>
              <UserInfo />
            </div>

            <div className='box'>
              <EditFeatures />
            </div>

            {errorMessage !== "" && errorMessage}
            <button className='button is-link' type='submit'>
              Save
            </button>
          </form>
        </div>
      </div>
      <div>
        <Link to='/dashboard'>Back</Link>
      </div>
    </>
  );
};

export default EditProfile;
