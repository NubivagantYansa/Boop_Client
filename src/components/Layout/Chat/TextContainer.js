import React from "react";

const TextContainer = ({ users, room }) => (
  <div className='container'>
    {users ? (
      <div>
        <h1 className='lead'>People currently chatting in {room}:</h1>
        <div className='container'>
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
