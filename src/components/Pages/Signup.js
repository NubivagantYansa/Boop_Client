import React from "react";
import useAuth from "../../hooks/useAuth";
import AddImage from "../Layout/AddImage";
import SignupFeatures from "../Layout/SignupFeatures";
import "./Signup.css";

const Signup = (props) => {
  const {
    stateInfo,
    setStateInfo,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useAuth(
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
  const { userRole, username, email, password, aboutMe, borough } = stateInfo;

  return (
    <div className=' container-fluid signup-background-image '>
      {/* <div className='container'> */}
      <div className='row d-flex justify-content-center'>
        {/* 
                            image
       */}
        <div className='container mt-4 col-sm p-4 '>
          {!stateInfo.image && (
            <h6 className='m-3 '>Choose your profile image...</h6>
          )}
          {stateInfo.image ? (
            <img
              className='image img-thumbnail img-fluid rounded mx-auto d-block'
              src={stateInfo.image}
            />
          ) : (
            <img
              className='image img-fluid rounded mx-auto d-block'
              src='/icons/addImage.png'
              alt='addImage'
            />
          )}
          <AddImage
            className='mb-4'
            addImage={(image) => setStateInfo({ ...stateInfo, image })}
          />
        </div>
        <div className='col p-4 '>
          <img
            className='img-fluid rounded float-right '
            src='/images/boo-logo.png'
            alt='logo'
          />
        </div>
      </div>
      {/* 
                            signup form
       */}
      <div className='row d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className='container-fluid'>
          <div className='form-group container shadow p-4   rounded'>
            {/* 
                              Role
      */}
            <div className=' p-2'>
              <div className='row p-2'>
                <div className='col-sm'>
                  <label>I am: </label>

                  <select
                    className='form-control'
                    name='userRole'
                    value={userRole}
                    onChange={handleChange}
                    required
                  >
                    <option value='' disabled>
                      none
                    </option>
                    <option value='Dog owner'>Dog owner</option>
                    <option value='Dogsitter'>Dogsitter</option>
                  </select>
                </div>
                {/* 
                              Username
      */}
                <div className='col-sm'>
                  <label>Username: </label>

                  <input
                    className='form-control'
                    name='username'
                    value={username}
                    onChange={handleChange}
                    required
                    type='text'
                    placeholder='Boop'
                  />
                </div>
                {/* 
                              Email
      */}
                <div className='col-sm'>
                  <label>Email: </label>

                  <input
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                    type='email'
                    placeholder='debora@boop.com'
                  />
                </div>

                {/* 
                              Password
      */}
                <div className='col-sm'>
                  <label>Password: </label>

                  <input
                    className='form-control'
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    required
                    placeholder='*******'
                  />
                </div>
              </div>

              {/* 
                              About me
      */}
              <div className='row p-2'>
                <div className='col-sm'>
                  <label>About me: </label>

                  <textarea
                    className='form-control'
                    name='aboutMe'
                    value={aboutMe}
                    onChange={handleChange}
                    required
                    type='text'
                    placeholder='I have had dogs all my life and could not imagine my days without them...'
                  />
                </div>

                {/* 
                              Borough
      */}
                <div className='col-sm'>
                  <label>Borough: </label>

                  <input
                    className='form-control'
                    name='borough'
                    value={borough}
                    onChange={handleChange}
                    required
                    type='text'
                    placeholder='Hackney'
                  />
                </div>
              </div>
            </div>

            <div className=' mt-4'>
              <SignupFeatures
                handleChangeFeatures={handleChangeFeatures}
                stateInfo={stateInfo}
              />
              <div className='row-fluid p-2'>
                {errorMessage !== "" && errorMessage}
              </div>
              <div className='row p-2'>
                <button
                  className=' col align-self-center btn info '
                  type='submit'
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
