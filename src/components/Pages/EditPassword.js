import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { editPassword } from "../../services/userService";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";

const EditPassword = () => {
  const { user, accessToken, authenticate } = useUser();
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
        if (response.errorMessage) {
          authenticate(user);
          history.push("/edit-password");
          return setErrorMessage(response.errorMessage);
        }
        authenticate(response.user);
        return history.push("/dashboard");
      })
      .catch((error) => {
        authenticate(user);
        history.push("/edit-password");
        return setErrorMessage(error);
      });
  };

  return (
    <div>
      <Settings />
      <h1>Edit password</h1>
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
          {errorMessage !== "" && errorMessage}
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
