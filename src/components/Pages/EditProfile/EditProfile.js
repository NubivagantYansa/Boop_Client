import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { Link, useHistory } from "react-router-dom";
import { editProfile } from "../../../services/userService";
import AddImage from "../../Layout/AddImage/AddImage";
import EditFeatures from "../../Layout/Features/EditFeatures";
import Settings from "../../Layout/SettingsC/Settings";
import UserInfo from "../../Layout/UserInfo/UserInfo";
import "./EditProfile.css";

const EditProfile = () => {
  const { user, setUser, authenticate, accessToken } = useUser();
  const history = useHistory();
  const [image, setImage] = useState(user.image);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    editProfile(user, accessToken)
      .then((response) => {
        if (response.errorMessage) {
          authenticate(user);
          history.push("/edit-profile");
          return setErrorMessage(response.errorMessage);
        }
        authenticate(response.user);
        history.push("/dashboard");
        return response;
      })
      .catch((error) => {
        authenticate(user);
        history.push("/edit-profile");
        return setErrorMessage(error);
      });
  };

  return (
    <div className=' edit-background-image container-fluid'>
      {/* 
                            title
       */}
      <div className='p-3 text-center row no-gutters'>
        <h1 className='p-3 display-4 col-sm-9 align-self-end '>
          Edit {user.username}'s profile
        </h1>
        <div className='p-3 col-sm-3 align-self-center'>
          <Link to='/dashboard'>
            <button className='btn info'>Back</button>
          </Link>
        </div>
      </div>

      {/* 
                            body
       */}
      <div className='p-3 text-center row no-gutters'>
        <section className='container mt-4'>
          <div className='row justify-content-center'>
            {/* 
                            card (column)
       */}

            <div className='col-md-9'>
              <div className='card rounded card-background mb-3'>
                {/* 
                            image
       */}
                <div>
                  {image && (
                    <div className='row no-gutters justify-content-center'>
                      <img
                        className='card-image-top img-card rounded'
                        src={user.image}
                        alt={user.username}
                      />
                    </div>
                  )}
                  <div className='row no-gutters justify-content-center'>
                    <AddImage
                      addImage={(image) => {
                        setImage(image);
                        setUser({ ...user, image });
                      }}
                    />
                  </div>
                </div>
                {/* 
                            edit form
       */}
                <div className='card-body '>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <UserInfo />
                    </div>

                    <div>
                      <EditFeatures />
                    </div>
                    <div className='p-2'>
                      {errorMessage !== "" && errorMessage}
                    </div>
                    <div className='row justify-content-center'>
                      <button className='col-3m btn info' type='submit'>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* 
                            settings (column)
       */}
            <div className='col-md '>
              <Settings />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditProfile;
