import React from "react";
import { useBoardData } from "../../hooks/useBoardData";
import FeatBorFilter from "../Layout/FiltersCard/FeatBorFilter";
import RoleFilter from "../Layout/FiltersCard/RoleFilter";
import Searchbar from "../Layout/FiltersCard/Searchbar";
import ProfilesList from "../Layout/ProfilesList";

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
    <div>
      <h1>Hello this is the Board page</h1>
      <div className='box m-3'>
        <RoleFilter filterRole={filterRole} />
        <Searchbar handleSearch={handleSearch} />
        <a href='#' onClick={readMore}>
          {expand ? "Read Less" : "More Filters"}
        </a>
        <div className='content mt-3'>
          {expand && <FeatBorFilter filterFeatures={filterFeatures} />}
        </div>
      </div>
      <div>
        <div className='columns is-multiline p-3'>
          <ProfilesList profilesList={profilesToShow} />
        </div>
      </div>
    </div>
  );
};

export default Board;
