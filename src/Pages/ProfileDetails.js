import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProfileDetails } from "../services/communityService";

export default class ProfileDetails extends Component {
  state = {
    profile: {},
    features: {},
  };

  componentDidMount() {
    getProfileDetails(this.props.match.params.id)
      .then((profile) => {
        return this.setState({ profile: profile, features: profile.features });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { username, aboutMe, borough, image } = this.state.profile;
    const {
      breed,
      chill,
      behaves,
      size,
      energy,
      pottyTraining,
    } = this.state.features;

    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-128x128'>
            <img src={image} alt={username} />
          </figure>
        </div>

        <div className='card-content'>
          <h5 className='title is-4'>{username}</h5>
          <h6 className='subtitle is-6'>
            <strong>Borough : </strong>
            {borough}
          </h6>
          <div className='content'>
            <p>
              <strong>About me </strong>: {aboutMe}
            </p>
            <div>
              <div className='box'>
                <p>
                  <strong>Size 📐 : </strong> {size}
                </p>
                <p>
                  <strong>Training 📚 : </strong> {behaves}
                </p>
                <p>
                  <strong>Breed 🐕 : </strong> {breed}
                </p>
                <p>
                  <strong>I like to chill 🐾 : </strong>
                  {chill}
                </p>
                <p>
                  <strong>Energy levels 🔋 : </strong> {energy}
                </p>
                <p>
                  <strong>Potty training 🚽 : </strong> {pottyTraining}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link to='/'>Back to Board</Link>
          </div>
        </div>
      </div>
    );
  }
}
