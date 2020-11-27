import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='container'>
      <div className='row no-gutters justify-content-end'>
        <div>
          <p>
            <strong>{trimmedName}:</strong>
          </p>
        </div>
      </div>

      <div className='row no-gutters justify-content-end'>
        <div className='p-3 m-1 mb-2 bg-info text-white rounded'>
          <p>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='container '>
      <div className='row no-gutters'>
        <p>
          <strong>{user}:</strong>
        </p>
      </div>

      <div className='row no-gutters'>
        <div className='p-3 mb-2 bg-light text-dark rounded'>
          <p>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
