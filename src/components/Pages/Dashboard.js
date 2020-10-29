import React, { Component } from "react";
import Settings from "../Layout/Settings";
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
      userRole,
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
                  <figure className=''>{image && <img src={image} />}</figure>
                </div>

                <div className='media-content mt-5 m-3'>
                  <p>
                    <strong>Username:</strong> {username}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {email}
                  </p>
                  <p>
                    <strong>Borough:</strong> {borough}
                  </p>
                  <p>
                    <strong>About:</strong> {aboutMe}
                  </p>
                </div>
              </article>
            </div>

            <div>
              <div className='box'>
                {userRole === "Dog owner" ? (
                  <h1>My ID:</h1>
                ) : (
                  <h1>My peferences</h1>
                )}
                <p>
                  <strong>
                    Size <span>📐</span> :{" "}
                  </strong>{" "}
                  {size}
                </p>
                <p>
                  <strong>
                    Training <span>📚</span> :{" "}
                  </strong>{" "}
                  {behaves}
                </p>
                <p>
                  <strong>
                    Breed <span>🐕</span> :{" "}
                  </strong>{" "}
                  {breed}
                </p>
                <p>
                  <strong>
                    I like to chill <span>🐾</span> :{" "}
                  </strong>
                  {chill}
                </p>
                <p>
                  <strong>
                    Energy levels <span>🔋</span> :{" "}
                  </strong>{" "}
                  {energy}
                </p>
                <p>
                  <strong>
                    Potty training <span>🚽</span> :{" "}
                  </strong>{" "}
                  {pottyTraining}
                </p>
              </div>
            </div>
          </section>
          <div className='column is-5 is-narrow'>
            <Settings className='column is-5 is-narrow' />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
