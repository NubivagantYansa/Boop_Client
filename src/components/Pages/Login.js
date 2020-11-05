import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = (props) => {
  const { stateInfo, errorMessage, handleChange, handleSubmit } = useAuth(
    {
      email: "",
      password: "",
      errorMessage: "",
    },
    "login",
    props
  );
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='field'>
          <label className='label'>Email: </label>
          <div className='control'>
            <input
              className='input'
              name='email'
              type='email'
              value={stateInfo.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
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

        {errorMessage !== "" && errorMessage}
        <button className='button is-link' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
