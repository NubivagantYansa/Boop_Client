import React from "react";

const RoleFilter = ({ filterRole }) => {
  return (
    <div className='btn-group d-block'>
      {[null, "Dog owner", "Dogsitter"].map((role) => (
        <button
          className='btn btn-lg choice m-1 '
          key={role}
          onClick={() => {
            filterRole(role);
          }}
        >
          {role ? (
            `${role}`
          ) : (
            <div>
              All profiles
              <img className='rounded mx-auto d-block' src='/icons/all.png' />
            </div>
          )}
          {role === "Dog owner" && (
            <img
              className='rounded mx-auto d-block'
              src='/icons/dog-white.png'
            />
          )}
          {role === "Dogsitter" && (
            <img
              className='rounded mx-auto d-block'
              src='/icons/dogsitter.png'
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default RoleFilter;
