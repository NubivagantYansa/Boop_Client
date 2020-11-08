import React from "react";
import { useBoardData } from "../../hooks/useBoardData";
import FeatBorFilter from "../Layout/FiltersCard/FeatBorFilter";
import RoleFilter from "../Layout/FiltersCard/RoleFilter";
import Searchbar from "../Layout/FiltersCard/Searchbar";
import ProfilesList from "../Layout/ProfilesList";
import "./Board.css";

const Board = (props) => {
  const {
    filterRole,
    handleSearch,
    expand,
    readMore,
    filterFeatures,
    profilesToShow,
  } = useBoardData(props);

  console.log(profilesToShow);
  return (
    <div className='mt-1 text-center p-2 board-background-image'>
      <section className='container-fluid '>
        <div className='row p-2'>
          <div className='col-sm'>
            <RoleFilter filterRole={filterRole} />
          </div>
        </div>
        <div className='row p-2'>
          <a className='col-sm' href='#' onClick={readMore}>
            {expand ? (
              <button className='choice'>Read Less</button>
            ) : (
              <button className='choice'>More Filters</button>
            )}
          </a>
          <div className='container-fluid'>
            {expand && (
              <div>
                <div className='row p-2 '>
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

      <section className='container-fluid'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          <ProfilesList profilesList={profilesToShow} />
        </div>
      </section>
    </div>
  );
};

export default Board;
