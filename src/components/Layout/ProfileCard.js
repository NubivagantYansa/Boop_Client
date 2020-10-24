import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

class ProfileCard extends Component {
  state = {
    expand: false,
  };

  componentDidMount = () => {
    console.log("CARDDD", this.props);
  };
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
        <Link to={`/profile/${_id}`}>
          <img src={image} className='card-img-top' alt={username} />
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{username}</h5>
          <h6 className='card-title'>{borough}</h6>
          <p className='card-text'>
            {this.state.expand ? aboutMe : aboutMeBrief}
          </p>
          <a href='#' className='card-link' onClick={this.readMore}>
            {this.state.expand ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
