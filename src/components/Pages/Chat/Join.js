import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className='chat-background-image align-middle'>
      <div className='container text-center align-middle' id='max-input'>
        <h1> Boop Live chat</h1>
        <h5 className='lead'>Join us!</h5>
        <div>
          <input
            placeholder='Boopie'
            className='form-control'
            type='text'
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <div className='field column'>
            <h5 className='lead'>Pick your room</h5>
            <div className='control'>
              <div className='select'>
                <select
                  className='mt-2 form-control'
                  name='size'
                  onChange={(event) => setRoom(event.target.value)}
                  required
                >
                  <option value='East London'>East London</option>
                  <option value='West London'>West London</option>
                  <option value='South London'>South London</option>
                  <option value='North London'>North London</option>
                </select>
              </div>
            </div>
          </div>
          <input
            placeholder='Park'
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
    </div>
  );
}
