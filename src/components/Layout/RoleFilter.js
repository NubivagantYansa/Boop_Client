import React from "react";

const RoleFilter = ({ onFilterRole }) => {
  return (
    <div>
      <div>
        <div className=' buttons'>
          {[null, "Dog owner", "Dogsitter"].map((role) => (
            <button
              className='button is-info'
              key={role}
              onClick={() => {
                onFilterRole(role);
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
