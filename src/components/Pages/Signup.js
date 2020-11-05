import React from "react";
import useAuth from "../../hooks/useAuth";
import AddImage from "../Layout/AddImage";
import SignupFeatures from "../Layout/SignupFeatures";

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
        {/* 
                              Role
      */}
        <div className='field'>
          <label className='label'>I am: </label>
          <div className='control'>
            <div className='select'>
              <select
                name='userRole'
                value={userRole}
                onChange={handleChange}
                required
              >
                <option className='is-unselectable' value=''>
                  none
                </option>
                <option value='Dog owner'>Dog owner</option>
                <option value='Dogsitter'>Dogsitter</option>
              </select>
            </div>
          </div>
        </div>
        {/* 
                              Username
      */}
        <div className='field'>
          <label className='label'>Username: </label>
          <div className='control has-icons-left'>
            <input
              className='input'
              name='username'
              value={username}
              onChange={handleChange}
              required
              type='text'
            />
          </div>
        </div>
        {/* 
                              Email
      */}
        <div className='field'>
          <label className='label'>Email: </label>
          <div className='control has-icons-left'>
            <input
              className='input'
              name='email'
              value={email}
              onChange={handleChange}
              required
              type='email'
            />
          </div>
        </div>
        {/* 
                              Password
      */}
        <div className='field'>
          <label className='label'>Password: </label>
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

        {/* 
                              About me
      */}
        <div className='field'>
          <label className='label'>About me: </label>
          <div className='control'>
            <textarea
              className='textarea'
              name='aboutMe'
              value={aboutMe}
              onChange={handleChange}
              required
              type='text'
            />
          </div>
        </div>
        {/* 
                              Borough
      */}
        <div className='field'>
          <label className='label'>Borough: </label>
          <div className='control'>
            <input
              className='input'
              name='borough'
              value={borough}
              onChange={handleChange}
              required
              type='text'
            />
          </div>
        </div>

        <SignupFeatures
          handleChangeFeatures={handleChangeFeatures}
          stateInfo={stateInfo}
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
