import React from "react";

const UserInfo = (props) => {
  console.log("get here soem props", props);
  const { userRole, username, email, aboutMe, borough } = props.state;
  return (
    <>
      <div className='field'>
        <label className='label'>I am: </label>
        <div className='control'>
          <div className='select'>
            <select
              name='userRole'
              value={userRole}
              onChange={props.handleChange}
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
      <div className='field'>
        <label className='label'>Username: </label>
        <div className='control has-icons-left'>
          <input
            className='input'
            name='username'
            value={username}
            onChange={props.handleChange}
            required
            type='text'
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Email: </label>
        <div className='control has-icons-left'>
          <input
            className='input'
            name='email'
            value={email}
            onChange={props.handleChange}
            required
            type='email'
          />
        </div>
      </div>
      {/* <div className='field'>
        <label className='label'>Password: </label>
        <div className='control'>
          <input
            className='input'
            name='password'
            type='password'
            value={password}
            onChange={props.handleChange}
            required
          />
        </div>
      </div> */}
      <div className='field'>
        <label className='label'>About me: </label>
        <div className='control'>
          <textarea
            className='textarea'
            name='aboutMe'
            value={aboutMe}
            onChange={props.handleChange}
            required
            type='text'
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Borough: </label>
        <div className='control'>
          <input
            className='input'
            name='borough'
            value={borough}
            onChange={props.handleChange}
            required
            type='text'
          />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
