import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className='container mt-5'>
      <div className='container'>
        <h1> Boop Live chat</h1>
        <h5 className='lead'>Join us!</h5>
        <div>
          <input
            placeholder='Name'
            className='form-control'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Room'
            className='mt-2 form-control'
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='btn info mt-2' type='submit'>
            Sign In
          </button>
        </Link>
      </div>
      <div>Page under construction...</div>
    </div>
  );
}
