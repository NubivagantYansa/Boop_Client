import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./ProfileCard.css";

class ProfileCard extends Component {
  state = {
    expand: false,
  };

  // componentDidMount = () => {
  //   console.log("CARDDD", this.props);
  // };
  readMore = (e) => {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { profile } = this.props;
    const { username, borough, aboutMe, image, _id } = profile;
    const aboutMeBrief = aboutMe.slice(0, 40);
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-1by1'>
            <Link to={`/profile/${_id}`}>
              <img src={image} alt={username} />
            </Link>
          </figure>
        </div>
        <div className='card-content'>
          <h5 className='title is-4'>{username}</h5>
          <h6 className='subtitle is-6'>{borough}</h6>
          <div className='content'>
            <p>{this.state.expand ? aboutMe : aboutMeBrief}</p>
            <a href='#' className='card-link' onClick={this.readMore}>
              {this.state.expand ? "Read Less" : "Read More"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
