import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProfileDetails, sendEmail } from "../../services/communityService";
import { useUser } from "../context/userContext";
import "./ProfileDetails.css";

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
  const { username, userRole, aboutMe, borough, image } = profile;

  const { breed, chill, behaves, size, energy, pottyTraining } = features;
  return (
    <div className='profile-background-image'>
      <section className='container pt-4'>
        <div className='card mb-3 '>
          <img
            className='m-2 card-img-top imge-card rounded mx-auto d-block'
            src={image}
            alt={username}
          />

          <div className='card-body'>
            <h5 className='card-title'>{username}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              <strong>Borough : </strong>
              {borough}
            </h6>
            <p>
              <strong>About me </strong>: {aboutMe}
            </p>

            <div className='row no-gutters mt-4'>
              <div className='col-md-4 d-flex justify-content-center'>
                {userRole === "Dog owner" ? (
                  <div className='d-inline-flex p-2'>
                    <span className='mr-2'>
                      <img src='/icons/dog.png' />
                    </span>
                    <span>
                      <h1> ID:</h1>
                    </span>
                  </div>
                ) : (
                  <div className='d-inline-flex p-2'>
                    <span className='mr-2'>
                      <img src='/icons/dog.png' />
                    </span>
                    <span>
                      <h1> picks:</h1>
                    </span>
                  </div>
                )}
              </div>
              <div className=' col-md-8  p-2'>
                <div className='card-body'>
                  <div>
                    <div>
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
                  <div>
                    <label>Write your text here: </label>

                    <textarea
                      className='form-control m-2'
                      name='bodyEmail'
                      value={bodyEmail}
                      onChange={handleChangeEmail}
                      required
                      type='text'
                      placeholder='Hi Jenny! I think you would be a great dogsitter for my Rocco! Feel free to get in touch at email@email.com for a chat. Best, Diana & Rocco'
                    />
                  </div>
                  <button className='btn info'>Send email</button>
                </form>
              )}
              {isEmailSent && <p>Your email has been sent!</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
