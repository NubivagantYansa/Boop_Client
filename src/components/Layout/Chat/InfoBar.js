import React from "react";
import { Link } from "react-router-dom";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className='pt-1 pb-1 top-bar'>
      <div className='row no-gutters'>
        <div className='col-1'>
          <img src='/icons/chat.png' alt='online-icon' className='ml-1' />
        </div>
        <div className='col-10 text-center'>
          <h3>{room}</h3>
        </div>
        <div className='col-1 d-flex justify-content-end'>
          <Link to={`/join`}>
            <img
              src='/icons/cancel (3).png'
              alt='close-icon'
              className='mr-1'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
