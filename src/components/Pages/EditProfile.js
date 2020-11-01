import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddImage from "../Layout/AddImage";
import Features from "../Layout/Features";
import Settings from "../Layout/Settings";
import UserInfo from "../Layout/UserInfo";
import { editProfile } from "../../services/userService";
import "./Dasboard.css";
import EditFeatures from "../Layout/EditFeatures";

export default class EditProfile extends Component {
  state = {
    user: this.props.user,
    userRole: this.props.user.userRole,
    username: this.props.user.username,
    email: this.props.user.email,
    borough: this.props.user.borough,
    aboutMe: this.props.user.aboutMe,
    image: this.props.user.image,
    features: {},
    errorMessage: "",
  };

  componentDidMount = () => {
    console.log("propppps", this.props);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "breed") return;
    this.setState({
      [name]: value,
    });
  };

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
    const { username, image, errorMessage } = this.state;

    return (
      <>
        <Settings />
        <div>
          <h1> Edit {username}'s profile</h1>
        </div>

        <div className='box'>
          <div className='box'>
            {/* 
                            image
       */}
            <div className='box'>
              {image && <img className='image' src={image} />}
              <AddImage addImage={(image) => this.setState({ image })} />
            </div>
            {/* 
                            edit form
       */}
            <form onSubmit={this.handleSubmit}>
              <div className='box'>
                <UserInfo handleChange={this.handleChange} state={this.state} />
              </div>

              <div className='box'>
                <EditFeatures
                  handleChangeFeatures={this.handleChangeFeatures}
                  user={this.state.user}
                />
              </div>

              {errorMessage !== "" && errorMessage}
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
