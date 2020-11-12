import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

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
      <div className=' text-center align-middle  p-2 login-background-image d-flex justify-content-center'>
        <form
          className=' form-signin m-4 p-4  '
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='max-input '>
            <h1 className='m2'>Please login</h1>

            <p>
              or
              <Link to='/signup'>
                <span> Signup</span>
              </Link>
            </p>

            <input
              className='form-control m-2'
              name='email'
              type='email'
              value={stateInfo.email}
              onChange={handleChange}
              required
              autoFocus
              placeholder='boop@boop.com'
            />

            <input
              className='form-control m-2'
              name='password'
              type='password'
              value={stateInfo.password}
              onChange={handleChange}
              required
              placeholder='********'
            />

            <div className='p-2'>{errorMessage !== "" && errorMessage}</div>
            <button className='btn  m-2 info' type='submit'>
              Login
            </button>
          </div>
          <p className='mt-5 mb-3 text-muted'>© Boop 2020</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
