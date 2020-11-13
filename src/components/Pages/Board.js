import { Popup } from "mapbox-gl";
import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useBoardData } from "../../hooks/useBoardData";
import FeatBorFilter from "../Layout/FiltersCard/FeaturesFilter";
import RoleFilter from "../Layout/FiltersCard/RoleFilter";
import Searchbar from "../Layout/FiltersCard/Searchbar";
import ProfilesList from "../Layout/Profile/ProfilesList";
import "./Board.css";

const Board = (props) => {
  const {
    filterRole,
    handleSearch,
    expand,
    readMore,
    filterFeatures,
    profilesToShow,
    viewport,
    setViewport,
    mapStyle,
    setSearch,
    resetFilters,
  } = useBoardData(props);

  console.log(profilesToShow);
  return (
    <div className='text-center p-2 board-background-image'>
      <section className='container-fluid '>
        <div className='row p-2'>
          <div className='col-sm mt-3'>
            <RoleFilter filterRole={filterRole} />
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
            {/* markers  */}

            {profilesToShow.map((profile) => (
              <Marker
                key={profile._id}
                longitude={profile.location.coordinates[0]}
                latitude={profile.location.coordinates[1]}
              >
                <div>
                  <button
                    className='lead btn info'
                    onClick={(e) => {
                      e.preventDefault();
                      return setSearch([profile]);
                    }}
                  >
                    <strong>{profile.username}</strong>
                  </button>
                  <img src='/icons/pin.png' alt='pointer' />
                </div>
              </Marker>
            ))}
          </ReactMapGL>
        </div>

        {/*
                            more filters
       */}

        <div className='row p-2'>
          <a className='col-sm' href='#' onClick={readMore}>
            {expand ? (
              <button className='choice m-1'>Read Less</button>
            ) : (
              <button className='choice m-1'>More Filters</button>
            )}
          </a>
          <div className='col-sm'>
            <button onClick={resetFilters} className='btn danger m-1'>
              Reset filters
            </button>
          </div>
          <div className='container-fluid'>
            {expand && (
              <div>
                <div className='row p-2'>
                  <div className=' col-sm d-flex justify-content-center '>
                    <Searchbar handleSearch={handleSearch} />
                  </div>
                </div>
                <div className='row p-2 '>
                  <FeatBorFilter filterFeatures={filterFeatures} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/*
                           profiles cards section
       */}
      <section className='container-fluid'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          <ProfilesList profilesList={profilesToShow} />
        </div>
      </section>
    </div>
  );
};

export default Board;
