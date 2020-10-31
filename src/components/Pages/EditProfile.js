import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddImage from "../Layout/AddImage";
import Features from "../Layout/Features";
import Settings from "../Layout/Settings";
import UserInfo from "../Layout/UserInfo";
import { editProfile } from "../../services/userService";
import "./Dasboard.css";
import FeaturesInfo from "../Layout/FeaturesInfo";

export default class EditProfile extends Component {
  state = {
    userRole: this.props.user.userRole,
    username: this.props.user.username,
    email: this.props.user.email,
    borough: this.props.user.borough,
    aboutMe: this.props.user.aboutMe,
    image: this.props.user.image,
    features: this.state.features,
    breed: this.props.user.features.breed,
    size: this.props.user.features.size,
    energy: this.props.user.features.energy,
    behaves: this.props.user.features.behaves,
    pottyTraining: this.props.user.features.pottyTraining,
    chill: this.props.user.features.chill,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "breed") return;
    this.setState({
      [name]: value,
    });
  };

  // handleChangeBreedOnly = (breed) => {
  //   this.setState({ breed });
  // };
  handleChangeFeatures = (features) => {
    console.log("features here prelogin", features);
    this.setState({ features });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    editProfile(
      {
        userRole: this.state.userRole,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        aboutMe: this.state.aboutMe,
        borough: this.state.borough,
        image: this.state.image,
        features: this.state.features,
        // breed: this.state.breed,
        // size: this.state.size,
        // energy: this.state.energy,
        // behaves: this.state.behaves,
        // pottyTraining: this.state.pottyTraining,
        // chill: this.state.chill,
      },
      accessToken
    )
      .then((response) => {
        this.props.authenticate(response.user);
        this.props.history.push("/dashboard");
        return response;
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { username, image } = this.state;

    return (
      <>
        <Settings />
        <div>
          <h1> Edit {username}'s profile</h1>
        </div>
        {this.state.errorMessage !== "" && this.state.errorMessage}

        <div className='box'>
          <div className='box'>
            <div className='box'>
              {image && <img className='image' src={image} />}
              <AddImage addImage={(image) => this.setState({ image })} />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className='box'>
                <UserInfo handleChange={this.handleChange} state={this.state} />
              </div>
              <div className='box'>
                {/* <FeaturesInfo
                  handleChangeFeatures={this.handleChangeFeatures}
                  state={this.state}
                /> */}
                <Features
                  handleChange={this.handleChange}
                  state={this.state}
                  handleChangeBreedOnly={this.handleChangeBreedOnly}
                />
              </div>

              <button className='button is-link' type='submit'>
                Save
              </button>
            </form>
          </div>
        </div>
        <div>
          <Link to='/dashboard'>Back</Link>
        </div>
      </>
    );
  }
}
