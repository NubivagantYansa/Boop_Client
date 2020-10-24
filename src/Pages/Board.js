import React, { Component } from "react";
import { getAllProfiles } from "../services/communityService";
import Searchbar from "../components/Layout/Searchbar";
import ProfilesList from "../components/Layout/ProfilesList";

export default class Board extends Component {
  state = {
    profilesList: [],
    srchResults: [],
  };

  componentDidMount = () => {
    console.log("BOARD", this.props);
    getAllProfiles()
      .then((profilesList) => {
        this.setState({
          profilesList: profilesList.profilesList,
          srchResults: profilesList.profilesList,
        });
        console.log("THIS STATE", this.state);
      })
      .catch((error) => console.log(error));
  };

  handleSearch = (value) => {
    const srchResults = this.state.profilesList.filter((profile) =>
      profile.aboutMe.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      srchResults: srchResults,
    });
  };

  // filterBySeason = (season) => this.setState({ season });

  render() {
    const { srchResults } = this.state;
    // const ProfilesToShow = srchResults.filter(
    //   (profile) =>
    //     season === null || Number(season) === singleEpisode.season
    // );
    return (
      <>
        <h1>Hello this is the Board page</h1>
        <Searchbar onHandleSearch={this.handleSearch} />
        <div>
          <div className='columns is-multiline'>
            <ProfilesList profilesList={srchResults} />
          </div>
        </div>
      </>
    );
  }
}
