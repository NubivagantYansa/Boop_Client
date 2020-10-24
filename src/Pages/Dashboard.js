import React, { Component } from "react";
import Settings from "../components/Layout/Settings";
import "./Dasboard.css";
class Dashboard extends Component {
  state = {
    expand: false,
  };
  render() {
    console.log("dashboard", this.props);
    const { username, email, borough, aboutMe, image } = this.props.user;
    const {
      behaves,
      breed,
      chill,
      energy,
      pottyTraining,
      size,
    } = this.props.user.features;
    return (
      <>
        <Settings />
        <div>
          <h1> {username}, welcome to your dashboard</h1>
        </div>
        <div className='box'>
          <div className='box'>
            {image && <img className='image' src={image} />}
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>borough: {borough}</p>
            <p>about: {aboutMe}</p>
          </div>
          <div className='box'>
            <p>size: {size}</p>
            <p>behaves: {behaves}</p>
            <p>breed: {breed}</p>
            <p>chill: {chill}</p>
            <p>energy: {energy}</p>
            <p>potty trainig: {pottyTraining}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
