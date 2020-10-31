import React from "react";
import AddImage from "../Layout/AddImage";
import Features from "../Layout/Features";
import UserInfo from "../Layout/UserInfo";
import { signup } from "../../services/userService";
import { Redirect } from "react-router-dom";

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
    itWorked: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "breed") return;
    this.setState({
      [name]: value,
    });
  };

  handleChangeBreedOnly = (breed) => {
    this.setState({ breed });
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
      .then(async (response) => {
        if (!response.status) {
          this.setState({ errorMessage: response.errorMessage });
          return;
        }
        console.log("HERE it successes ");
        if (response.accessToken) {
          localStorage.setItem("accessToken", response.accessToken);
          await this.props.authenticate(response.user);
          this.setState({ itWorked: true });
          return;
        }
        return this.setState({ errorMessage: response.errorMessage });
        return response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user),
            this.props.history.push("/dashboard"))
          : this.setState({
              errorMessage: response.errorMessage,
            });
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log("MYT PROPS, MY PROPS, MY ", this.props);
    if (!this.state.itWorked) {
      return <Redirect to='/' />;
    }
    const { password, image, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        {/* <button
          style={{ height: "100vh", width: "100vw", backgroundColor: "BLUE" }}
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          CLICK ME EHEREOHGKDJHFSJKGHFJKSGHSJKHGKJSHFG
        </button> */}
        {image && <img src={image} />}
        <AddImage addImage={(image) => this.setState({ image })} />
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
          <Features
            handleChange={this.handleChange}
            state={this.state}
            handleChangeBreedOnly={this.handleChangeBreedOnly}
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
