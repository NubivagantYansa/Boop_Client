import React, { Component } from "react";
import { Link } from "react-router-dom";
import { editPassword } from "../../services/userService";
import Settings from "../Layout/Settings";

export default class EditPassword extends Component {
  state = {
    password: "",
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
    console.log("state", this.state);
    editPassword(
      {
        password: this.state.password,
      },
      accessToken
    )
      .then((response) => {
        console.log("EDITED password", response);
        this.props.authenticate(response.user);
        this.props.history.push("/dashboard");
        return response;
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <>
        {" "}
        <Settings />
        <h1>Edit password</h1>
        {this.state.errorMessage !== "" && this.state.errorMessage}
        <p>{this.state.password}</p>
        <form onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='label'>New Password: </label>
            <div className='control'>
              <input
                className='input'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <button className='button is-link' type='submit'>
            Save
          </button>
        </form>
        <div>
          <Link to='/dashboard'>Back</Link>
        </div>
      </>
    );
  }
}
