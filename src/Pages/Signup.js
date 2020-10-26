import React from "react";
import AddImage from "../components/Layout/AddImage";
import Features from "../components/Layout/Features";
import { signup } from "../services/userService";

class Signup extends React.Component {
  state = {
    boroughList: [],
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
    pottyTraining: "",
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
    console.log("state", this.state);
    signup({
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
    })
      .then((response) =>
        response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user, response.features),
            this.props.history.push("/dashBoard"))
          : this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((error) => console.log(error));
  };

  render() {
    const {
      userRole,
      username,
      email,
      password,
      aboutMe,
      borough,
      image,
      errorMessage,
    } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        {image && <img src={image} />}
        <AddImage addImage={(image) => this.setState({ image })} />
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
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
          </div>

          <Features handleChange={this.handleChange} state={this.state} />
          <button className='button is-link' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
