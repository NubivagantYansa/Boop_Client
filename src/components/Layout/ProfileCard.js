import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  const [isExpanded, setExpand] = useState(false);

  const readMore = (e) => {
    e.preventDefault();
    setExpand(!isExpanded);
  };
  const { profile } = props;
  const { username, borough, aboutMe, image, _id } = profile;
  const aboutMeBrief = aboutMe.slice(0, 40);

  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <Link to={`/profile/${_id}`}>
            <img src={image} alt={username} />
          </Link>
        </figure>
      </div>
      <div className='card-content'>
        <h5 className='title is-4'>{username}</h5>
        <h6 className='subtitle is-6'>{borough}</h6>
        <div className='content'>
          <p>{isExpanded ? aboutMe : aboutMeBrief}</p>
          <a href='#' className='card-link' onClick={readMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
