import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { editPassword } from "../../services/userService";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";

const EditPassword = () => {
  const { user, accessToken, authenticate } = useUser();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") setPassword(value);
    if (name === "password2") setPassword2(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2)
      return setErrorMessage("Error! Passwords do not match");
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
    <div className='edit-background-image container-fluid'>
      {/* 
                            title
       */}
      <div className='p-3 text-center row no-gutters'>
        <h1 className='p-3 display-4 col-sm-9 align-self-end '>
          Edit {user.username}'s password
        </h1>
        <div className='p-3 col-sm-3 align-self-center'>
          <Link to='/dashboard'>
            <button className='btn info'>Back</button>
          </Link>
        </div>
      </div>

      {/* 
                            body
       */}
      <div className='p-3 text-center row no-gutters '>
        <section className='container mt-4'>
          <div className='row justify-content-center'>
            <div className='col-md-9 '>
              <div className='card-body text-center'>
                <form
                  className='d-flex flex-column align-items-center card-background p-3'
                  onSubmit={handleSubmit}
                >
                  <label className=' mt-2'>New password: </label>

                  <input
                    className='form-control p-3 m-3 max-input'
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    required
                  />
                  <label className=' mt-2'> Confirm password: </label>

                  <input
                    className='form-control p-3 m-2 max-input'
                    name='password2'
                    type='password'
                    value={password2}
                    onChange={handleChange}
                    required
                  />

                  <div className='p-2'>
                    {errorMessage !== "" && errorMessage}
                  </div>
                  <button className='btn info p-2' type='submit'>
                    Save
                  </button>
                </form>
              </div>
            </div>
            {/* 
                            settings (column)
       */}
            <div className='col-md '>
              <Settings />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditPassword;
