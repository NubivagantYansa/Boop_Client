import React from "react";
import ProfileCard from "./ProfileCard";

const ProfilesList = (props) => {
  console.log("UFFA", props);
  const list = props.profilesList.map((profile) => {
    return (
      <div className='column is-4' key={profile._id}>
        <ProfileCard profile={profile} />
      </div>
    );
  });
  return <>{list}</>;
};

export default ProfilesList;
