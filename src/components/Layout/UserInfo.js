import React from "react";
import { useUser } from "../context/userContext";

const UserInfo = () => {
  const { user, setUser } = useUser();
  const { userRole, username, email, borough, aboutMe } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
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
    </>
  );
};

export default UserInfo;
