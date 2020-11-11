import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilesList = (props) => {
  const list = props.profilesList.map((profile) => {
    return (
      <div className='col' key={profile._id}>
        <ProfileCard profile={profile} />
      </div>
    );
  });
  return <>{list}</>;
};

export default ProfilesList;
