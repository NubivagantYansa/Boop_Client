import React, { Component } from "react";
import Settings from "../components/Layout/Settings";
import "./Dasboard.css";
class Dashboard extends Component {
  state = {
    expand: false,
  };

  componentDidMount = () => {
    console.log("DASH", this.props);
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
        <section className='herocolumn is-12 is-flexible is-flex-direction-column is-justify-content-center'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>{username}, welcome to your dashboard</h1>
              <h2 className='subtitle'>write something cool here</h2>
            </div>
          </div>
        </section>

        <div className='columns is-mobile'>
          <section className='box column is-flex-direction-column'>
            <div>
              <article className='media'>
                <div className='media-left'>
                  <figure className='image is-480x480 m-3'>
                    {image && <img src={image} />}
                  </figure>
                </div>

                <div className='media-content mt-5 m-3'>
                  <p>
                    <strong>Username:</strong> {username}
                  </p>
                  <p>
                    <strong>email: </strong>
                    {email}
                  </p>
                  <p>
                    <strong>borough:</strong> {borough}
                  </p>
                  <p>
                    <strong>about:</strong> {aboutMe}
                  </p>
                </div>
              </article>
            </div>

            <div>
              <div className='box'>
                <p>
                  <strong>Size 📐 : </strong> {size}
                </p>
                <p>
                  <strong>Training 📚 : </strong> {behaves}
                </p>
                <p>
                  <strong>Breed 🐕 : </strong> {breed}
                </p>
                <p>
                  <strong>I like to chill 🐾 : </strong>
                  {chill}
                </p>
                <p>
                  <strong>Energy levels 🔋 : </strong> {energy}
                </p>
                <p>
                  <strong>Potty training 🚽 : </strong> {pottyTraining}
                </p>
              </div>
            </div>
          </section>
          <div className='column is-3 is-narrow'>
            <Settings className='column is-3 is-narrow' />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
