import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = (props) => {
  const [stateInfo, errorMessage, handleChange, handleSubmit] = useAuth(
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
      {errorMessage !== "" && errorMessage}
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label'>Email: </label>
          <div className='control has-icons-left'>
            <input
              className='input'
              name='email'
              value={stateInfo.email}
              onChange={handleChange}
              required
              type='email'
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Password: </label>
          <div className='control has-icons-left'>
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
        <button className='button is-link' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
