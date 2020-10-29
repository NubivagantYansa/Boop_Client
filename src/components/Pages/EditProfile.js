import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddImage from "../Layout/AddImage";
import Features from "../Layout/Features";
import Settings from "../Layout/Settings";
import UserInfo from "../Layout/UserInfo";
import { editProfile } from "../../services/userService";
import "./Dasboard.css";

export default class EditProfile extends Component {
  state = {
    userRole: this.props.user.userRole,
    username: this.props.user.username,
    email: this.props.user.email,
    borough: this.props.user.borough,
    aboutMe: this.props.user.aboutMe,
    image: this.props.user.image,
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
    this.setState({
      [name]: value,
    });
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
        features: {
          breed: this.state.breed,
          size: this.state.size,
          energy: this.state.energy,
          behaves: this.state.behaves,
          pottyTraining: this.state.pottyTraining,
          chill: this.state.chill,
        },
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
    const { userRole, username, email, borough, aboutMe, image } = this.state;

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
              {/* <div className='field'>
                <label className='label'>I am: </label>
                <div className='control'>
                  <div className='select'>
                    <select
                      name='userRole'
                      value={userRole}
                      onChange={this.handleChange}
                      required
                    >
                      <option className='is-unselectable' value='none'>
                        none
                      </option>
                      <option value='Dog owner'>Dog owner</option>
                      <option value='Dogsitter'>Dogsitter</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='field'>
                <label className='label'>Username: </label>
                <div className='control has-icons-left'>
                  <input
                    className='input'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                    required
                    type='text'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Email: </label>
                <div className='control has-icons-left'>
                  <input
                    className='input'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    required
                    type='email'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>About me: </label>
                <div className='control'>
                  <textarea
                    className='textarea'
                    name='aboutMe'
                    value={aboutMe}
                    onChange={this.handleChange}
                    required
                    type='text'
                  />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Borough: </label>
                <div className='control'>
                  <input
                    className='input'
                    name='borough'
                    value={borough}
                    onChange={this.handleChange}
                    required
                    type='text'
                  />
                </div>
              </div> */}
              <div className='box'>
                <UserInfo handleChange={this.handleChange} state={this.state} />
              </div>
              <div className='box'>
                <Features handleChange={this.handleChange} state={this.state} />
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
