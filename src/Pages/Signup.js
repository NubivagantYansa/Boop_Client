import React from "react";
import AddImage from "../components/Layout/AddImage";
import Features from "../components/Layout/Features";
import { signup } from "../services/userService";

class Signup extends React.Component {
  state = {
    userRole: "",
    username: "",
    email: "",
    password: "",
    image: "",
    aboutMe: "",
    borough: "",
    breed: "",
    size: "",
    energy: "",
    behaves: "",
    pottyTrain: "",
    chill: "",
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
    signup({
      userRole: this.state.userRole,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      aboutMe: this.state.aboutMe,
      borough: this.state.borough,
      features: this.state.features,
    })
      .then((response) =>
        response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user),
            this.props.history.push("/"))
          : this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const {
      userRole,
      username,
      email,
      password,
      aboutMe,
      borough,
      errorMessage,
    } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        {/* check with Andre add image props */}
        <AddImage addImage={this.image} />
        <form onSubmit={this.handleSubmit}>
          <label>I am: </label>
          <select
            name='userRole'
            value={userRole}
            onChange={this.handleChange}
            required
          >
            {/* value none to be grayed out */}
            <option value='none'>none</option>
            <option value='Dog owner'>Dog owner</option>
            <option value='Dogsitter'>Dogsitter</option>
          </select>
          <label>username: </label>
          <input
            name='username'
            value={username}
            onChange={this.handleChange}
            required
            type='text'
          />
          <label>Email: </label>
          <input
            name='email'
            value={email}
            onChange={this.handleChange}
            required
            type='email'
          />
          <label>Password: </label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <label>About me: </label>
          <input
            name='aboutMe'
            value={aboutMe}
            onChange={this.handleChange}
            required
            type='text'
          />
          <label>Borough: </label>
          <input
            name='borough'
            value={borough}
            onChange={this.handleChange}
            required
            type='text'
          />
          <Features />
          <button type='submit'> Sign up </button>
        </form>
      </div>
    );
  }
}

export default Signup;
