import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const [isExpanded, setExpand] = useState(false);

  const readMore = (e) => {
    e.preventDefault();
    setExpand(!isExpanded);
  };
  const { profile } = props;
  const { username, address, aboutMe, image, _id } = profile;
  const aboutMeBrief = aboutMe.slice(0, 40);

  return (
    <div className=' card m-3 pt-4 card-background rounded'>
      <Link to={`/profile/${_id}`}>
        <img
          className='card-image-top img-card rounded mx-auto  rounded'
          src={image}
          alt={username}
        />
      </Link>

      <div className='card-body '>
        <h5 className='card-title'>{username}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{address}</h6>
        <div className='card-tex'>
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
