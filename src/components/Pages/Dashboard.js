import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useUser } from "../context/userContext";
import Settings from "../Layout/Settings";
import "./Dasboard.css";

function Dashboard() {
  const { user } = useUser();
  const { username, userRole, email, address, aboutMe, image } = user;
  const { behaves, breed, chill, energy, pottyTraining, size } = user.features;

  //mapbox
  const { coordinates } = user.location;
  const [viewport, setViewport] = useState({
    longitude: coordinates[0],
    latitude: coordinates[1],
    width: "80vw",
    height: "40vh",
    zoom: 15,
  });
  const mapStyle = "mapbox://styles/nubivagant/ckhg4igin14hf19kzu7hspq52";

  //clean board data
  useEffect(() => {
    return () => {
      setViewport(null);
    };
  }, []);

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
                      <strong>About:</strong> {aboutMe}
                    </p>
                    <p>
                      <strong>Address:</strong> {address}
                    </p>
                  </div>
                </div>
              </div>

              {/*
                            map
       */}

              <div className='row no-gutters justify-content-center p-2'>
                <ReactMapGL
                  className='rounded'
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  mapStyle={mapStyle}
                  onViewportChange={(viewport) => setViewport(viewport)}
                >
                  {
                    <Marker
                      key={user.username}
                      longitude={coordinates[0]}
                      latitude={coordinates[1]}
                    >
                      <img src='/icons/pin.png' alt='pointer' />
                    </Marker>
                  }
                </ReactMapGL>
              </div>

              {/*
                            Features
       */}

              <div className='row no-gutters  '>
                <div className='col-md text-center'>
                  {userRole === "Dog owner" ? (
                    <div>
                      <div className='row no-gutters justify-content-center '>
                        <img src='/icons/dog.png' alt='dog-img' />
                      </div>
                      <div className='row no-gutters justify-content-center  '>
                        <h1> ID:</h1>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className='row no-gutters justify-content-center '>
                        <img src='/icons/dog.png' alt='dogsitter-img' />
                      </div>
                      <div className='row no-gutters justify-content-center  '>
                        <h1> Picks:</h1>
                      </div>
                    </div>
                  )}
                </div>

                <div className='col-sm-8 card-body rounded mb-2 p-3 m-2'>
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
