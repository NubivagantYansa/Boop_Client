import React from "react";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";
import "./Dasboard.css";

function Dashboard() {
  const { user } = useUser();
  const { username, userRole, email, borough, aboutMe, image } = user;
  const { behaves, breed, chill, energy, pottyTraining, size } = user.features;

  return (
    <div className='dashboard-background-image'>
      {/* 
                            title
       */}
      <div className='p-4 text-center'>
        <h1 className='display-4'>Welcome to your dashboard</h1>
      </div>

      {/* 
                            body
       */}
      <section className='container mt-4'>
        <div className='row justify-content-center'>
          {/* 
                            card column
       */}
          <div className=' col-md-9 mb-3'>
            <div className='card mb-3 card-background'>
              <div className='row no-gutters'>
                {/* 
                            card - image
       */}
                <div className='col-md-4 d-flex justify-content-center'>
                  {image && (
                    <img className='img-card' src={image} alt='profile-img' />
                  )}
                </div>

                {/* 
                            card- body 
       */}
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h4 className='card-title'>{username}</h4>
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
                </div>
              </div>
              <div className='row no-gutters justify-content-center'>
                <div className='col-md-4 d-flex justify-content-center'>
                  {userRole === "Dog owner" ? (
                    <div className='d-inline-flex p-2'>
                      <span className='mr-2'>
                        <img src='/icons/dog.png' alt='dog-img' />
                      </span>
                      <span>
                        <h1> ID:</h1>
                      </span>
                    </div>
                  ) : (
                    <div className='d-inline-flex '>
                      <span className='mr-2'>
                        <img src='/icons/dog.png' alt='dogsitter-img' />
                      </span>
                      <span>
                        <h1> picks:</h1>
                      </span>
                    </div>
                  )}
                </div>

                <div className='col-sm-5 card-body border border-info rounded mb-2 p-3 m-2'>
                  <div>
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
              </div>
            </div>
          </div>

          {/* 
                            settings column
       */}
          <div className='col-md-3 '>
            <Settings />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
