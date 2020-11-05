import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { editPassword } from "../../services/userService";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";

const EditPassword = () => {
  const { accessToken, authenticate } = useUser();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPassword(
      {
        password: password,
      },
      accessToken
    )
      .then((response) => {
        console.log("EDITED password", response);
        authenticate(response.user);
        history.push("/dashboard");
        return response;
      })
      .catch((error) => {
        setErrorMessage(error);
        console.log(error);
      });
  };

  return (
    <div>
      <Settings />
      <h1>Edit password</h1>
      {errorMessage !== "" && errorMessage}
      <p>{password}</p>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>New Password: </label>
          <div className='control'>
            <input
              className='input'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className='button is-link' type='submit'>
          Save
        </button>
      </form>
      <div>
        <Link to='/dashboard'>Back</Link>
      </div>
    </div>
  );
};

export default EditPassword;
