import React from "react";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className='container '>
    <input
      className='form-control'
      type='text'
      placeholder='Type a message...'
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className='btn info m-2 ' onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
