import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
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
      <div className=' text-center p-2 login-background-image'>
        <form
          className=' m-4 p-4 d-flex justify-content-center '
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <h1 className='m2'>Please login</h1>

            <p>
              or
              <Link to='/signup'>
                <span> Signup</span>
              </Link>
            </p>

            <input
              className='form-control m-2 '
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
        </form>

        <div>
          <p className='text-muted'>
            <strong>Test profile credentials:</strong> laika@boop.com -
            Boopdog123
          </p>
          <p className=' text-muted'>© Boop 2020 - Debora Crescenzo</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
