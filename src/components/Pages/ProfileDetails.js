import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileDetails, sendEmail } from "../../services/communityService";
import { useUser } from "../context/userContext";

const ProfileDetails = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [features, setFeatures] = useState({});
  const [expand, setExpand] = useState(false);
  const [bodyEmail, setBodyEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProfileDetails(id)
      .then((profileDB) => {
        if (profileDB) {
          setProfile(profileDB);
          setFeatures(profileDB.features);
          return setIsLoading(false);
        }
        return;
      })
      .catch((error) => console.log(error));
  }, []);

  const readMore = (e) => {
    e.preventDefault();
    return setExpand(!expand);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    console.log("email values", value);
    return setBodyEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sender = user._id;
    const receiver = profile._id;
    const body = bodyEmail;
    return sendEmail(body, receiver, sender)
      .then((response) => {
        setExpand(false);
        setIsEmailSent(true);
        return setBodyEmail("");
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>loading... </div>;
  }
  const { username, aboutMe, borough, image } = profile;

  const { breed, chill, behaves, size, energy, pottyTraining } = features;
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-128x128'>
          <img src={image} alt={username} />
        </figure>
      </div>

      <div className='card-content'>
        <h5 className='title is-4'>{username}</h5>
        <h6 className='subtitle is-6'>
          <strong>Borough : </strong>
          {borough}
        </h6>
        <div className='content'>
          <p>
            <strong>About me </strong>: {aboutMe}
          </p>

          <div>
            <div className='box'>
              <p>
                <strong>Size : </strong> {size}
              </p>
              <p>
                <strong>Training : </strong> {behaves}
              </p>
              <p>
                <strong>Breed : </strong> {breed}
              </p>
              <p>
                <strong>I like to chill : </strong>
                {chill}
              </p>
              <p>
                <strong>Energy levels : </strong> {energy}
              </p>
              <p>
                <strong>Potty training : </strong> {pottyTraining}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to='/'>Back to Board</Link>
        </div>
        <div>
          <a href='#' onClick={readMore}>
            {expand ? "Read Less" : "Get in touch"}
          </a>
        </div>
        <div>
          {expand && (
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label className='label'>Write your text here: </label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    name='bodyEmail'
                    value={bodyEmail}
                    onChange={handleChangeEmail}
                    required
                    type='text'
                    placeholder='Hi Jenny! I think you would be a great dogsitter for my Rocco! Feel free to get in touch at email@email.com for a chat. Best, Diana & Rocco'
                  />
                </div>
              </div>
              <button>Send email</button>
            </form>
          )}
          {isEmailSent && <p>Your email has been sent!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
