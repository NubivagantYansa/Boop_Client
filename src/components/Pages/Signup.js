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
    return signup({
      features: this.state.features,
      userRole: this.state.userRole,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      aboutMe: this.state.aboutMe,
      borough: this.state.borough,
      image: this.state.image,
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
        {errorMessage !== "" && errorMessage}
        {/* 
                            image
       */}
        {image && <img src={image} />}
        <AddImage addImage={(image) => this.setState({ image })} />
        {/* 
                            signupform
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

          <button className='button is-link' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
