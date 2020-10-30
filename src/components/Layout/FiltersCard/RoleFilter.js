import React from "react";

const RoleFilter = ({ filterRole }) => {
  return (
    <div>
      <div>
        <div className=' buttons m-3'>
          {[null, "Dog owner", "Dogsitter"].map((role) => (
            <button
              className='button is-info'
              key={role}
              onClick={() => {
                filterRole(role);
              }}
            >
              {role ? `${role}` : "All"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleFilter;
