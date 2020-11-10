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
    <div className='container-fluid'>
      <div className='form-group container p-4   rounded'>
        {/* 
                              Role
      */}
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
              <option value=''>none</option>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
