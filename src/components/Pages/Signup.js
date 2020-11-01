import React from "react";
import AddImage from "../Layout/AddImage";
import UserInfo from "../Layout/UserInfo";
import { signup } from "../../services/userService";
import FeaturesInfo from "../Layout/FeaturesInfo";

class Signup extends React.Component {
  state = {
    userRole: "",
    username: "",
    email: "",
    password: "",
    image: "",
    aboutMe: "",
    borough: "",
    features: {},
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // if (name === "breed") return;
    this.setState({
      [name]: value,
    });
  };

  handleChangeFeatures = (features) => {
    this.setState({ features });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    return signup({
      userRole: this.state.userRole,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      borough: this.state.borough,
      aboutMe: this.state.aboutMe,
      image: this.state.image,
      features: this.state.features,
    })
      .then((response) => {
        if (!response.status) {
          this.setState({ errorMessage: response.errorMessage });
          return;
        }
        return response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user),
            this.props.history.push("/board"))
          : this.setState({
              errorMessage: response.errorMessage,
            });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { password, image, errorMessage } = this.state;
    return (
      <div>
        {/* 
                            image
       */}
        {image && <img className='image' src={image} />}
        <AddImage addImage={(image) => this.setState({ image })} />
        {/* 
                            signup form
       */}
        <form onSubmit={this.handleSubmit}>
          <UserInfo handleChange={this.handleChange} state={this.state} />

          <div className='field'>
            <label className='label'>Password: </label>
            <div className='control'>
              <input
                className='input'
                name='password'
                type='password'
                value={password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <FeaturesInfo
            handleChangeFeatures={this.handleChangeFeatures}
            state={this.state}
          />

          {errorMessage !== "" && errorMessage}
          <button className='button is-link' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
