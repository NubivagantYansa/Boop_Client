import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddImage from "../Layout/AddImage";
import FeaturesInfo from "../Layout/FeaturesInfo";
import UserInfo from "../Layout/UserInfo";

const Signup = (props) => {
  const [
    stateInfo,
    setStateInfo,
    errorMessage,
    handleChange,
    handleSubmit,
  ] = useAuth(
    {
      userRole: "",
      username: "",
      email: "",
      password: "",
      image: "",
      aboutMe: "",
      borough: "",
      features: {},
      errorMessage: "",
    },
    "signup",
    props
  );

  const handleChangeFeatures = (features) => {
    setStateInfo({ ...stateInfo, features });
  };

  return (
    <div>
      {/* 
                            image
       */}
      {stateInfo.image && <img className='image' src={stateInfo.image} />}
      <AddImage addImage={(image) => setStateInfo({ ...stateInfo, image })} />
      {/* 
                            signup form
       */}
      <form onSubmit={handleSubmit}>
        <UserInfo handleChange={handleChange} state={stateInfo} />

        <div className='field'>
          <label className='label'>Password: </label>
          <div className='control'>
            <input
              className='input'
              name='password'
              type='password'
              value={stateInfo.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <FeaturesInfo
          handleChangeFeatures={handleChangeFeatures}
          state={stateInfo}
        />

        {errorMessage !== "" && errorMessage}
        <button className='button is-link' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
