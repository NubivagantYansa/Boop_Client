import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilesList = (props) => {
  console.log("UFFA", props);
  const list = props.profilesList.map((profile) => {
    return (
      <div className='col-3 mb-4' key={profile._id}>
        <ProfileCard profile={profile} />
      </div>
    );
  });
  return (
    <>
      <h1>Hello</h1>
      <div className='row'>{list}</div>
    </>
  );
};

export default ProfilesList;
