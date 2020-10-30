import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProfileDetails, sendEmail } from "../../services/communityService";

export default class ProfileDetails extends Component {
  state = {
    profile: {},
    features: {},
    expand: false,
    bodyEmail: "",
  };

  componentDidMount() {
    getProfileDetails(this.props.match.params.id)
      .then((profile) => {
        return this.setState({
          profile: profile,
          features: profile.features,
        });
      }, console.log(this.props))
      .catch((error) => console.log(error));
  }

  readMore = (e) => {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("HELLOOOOO");
    const sender = this.props.user._id;
    const receiver = this.state.profile._id;
    const bodyEmail = this.state.bodyEmail;
    sendEmail(bodyEmail, receiver, sender)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
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
                  <strong>Size : </strong> {size}
                </p>
                <p>
                  <strong>Training : </strong> {behaves}
                </p>
                <p>
                  <strong>Breed : </strong> {breed}
                </p>
                <p>
                  <strong>I like to chill : </strong>
                  {chill}
                </p>
                <p>
                  <strong>Energy levels : </strong> {energy}
                </p>
                <p>
                  <strong>Potty training : </strong> {pottyTraining}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Link to='/'>Back to Board</Link>
          </div>
          <div>
            <a href='#' onClick={this.readMore}>
              {this.state.expand ? "Read Less" : "Get in touch"}
            </a>
          </div>
          <div>
            {" "}
            {this.state.expand && (
              <form onSubmit={this.handleSubmit}>
                <div className='field'>
                  <label className='label'>Write your text here: </label>
                  <div className='control'>
                    <textarea
                      className='textarea'
                      name='bodyEmail'
                      value={this.state.bodyEmail}
                      onChange={this.handleChange}
                      required
                      type='text'
                      placeholder='Hi Jenny! I think you would be a great dogsitter for my Rocco! Feel free to get in touch at email@email.com for a chat. Best, Diana & Rocco'
                    />
                  </div>
                </div>
                <button>Send email</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}
