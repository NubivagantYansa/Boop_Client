import React, { useState } from "react";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";
import "./Dasboard.css";
function Dashboard() {
  const [expand, setExpand] = useState(false);
  const { user } = useUser();
  const { username, email, borough, aboutMe, image } = user;

  const {
    userRole,
    behaves,
    breed,
    chill,
    energy,
    pottyTraining,
    size,
  } = user.features;
  return (
    <>
      <section className='herocolumn is-12 is-flexible is-flex-direction-column is-justify-content-center'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{username}, welcome to your dashboard</h1>
            <h2 className='subtitle'>write something cool here</h2>
          </div>
        </div>
      </section>

      <div className='columns is-mobile'>
        <section className='box column is-flex-direction-column'>
          <div>
            <article className='media'>
              <div className='media-left'>
                <figure className=''>{image && <img src={image} />}</figure>
              </div>

              <div className='media-content mt-5 m-3'>
                <p>
                  <strong>Username:</strong> {username}
                </p>
                <p>
                  <strong>Email: </strong>
                  {email}
                </p>
                <p>
                  <strong>Borough:</strong> {borough}
                </p>
                <p>
                  <strong>About:</strong> {aboutMe}
                </p>
              </div>
            </article>
          </div>

          <div>
            <div className='box'>
              {userRole === "Dog owner" ? (
                <h1>My ID:</h1>
              ) : (
                <h1>My peferences</h1>
              )}
              <p>
                <strong>Size : </strong>
                {size}
              </p>
              <p>
                <strong>Training : </strong>
                {behaves}
              </p>
              <p>
                <strong>Breed : </strong> {breed}
              </p>
              <p>
                <strong>I like to chill : </strong>
                {chill}
              </p>
              <p>
                <strong>Energy levels : </strong>
                {energy}
              </p>
              <p>
                <strong>Potty training : </strong>
                {pottyTraining}
              </p>
            </div>
          </div>
        </section>
        <div className='column is-5 is-narrow'>
          <Settings className='column is-5 is-narrow' />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
