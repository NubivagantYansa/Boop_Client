import React from "react";

const TextContainer = ({ users, room }) => (
  <div className='container'>
    {users ? (
      <div className='square text-center'>
        <h1 className='lead p-3'>People currently chatting in {room}:</h1>
        <div className='container p-3 text-center'>
          <h6>
            {users.map(({ name }) => (
              <div key={name}>
                <p>{name}</p>
              </div>
            ))}
          </h6>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
