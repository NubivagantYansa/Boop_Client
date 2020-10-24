import React, { Component } from "react";
import { deleteProfile } from "../services/userService";

export default class DeleteProfile extends Component {
  componentDidMount = () => {
    console.log("DELETE", this.props);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const userId = this.props.user._id;
    this.props.handleLogout();
    return deleteProfile(userId);
  };
  render() {
    return (
      <>
        <h1>Delete profile page</h1>
        <div className='box'>
          <p>Are you sure you want to delete your profile?</p>
          <form onSubmit={this.handleSubmit}>
            <button className='button is-danger'>Delete</button>
          </form>
        </div>
      </>
    );
  }
}
