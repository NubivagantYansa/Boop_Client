import React, { Component } from "react";
import { getAllProfiles } from "../services/communityService";
import Searchbar from "../components/Layout/Searchbar";
import ProfilesList from "../components/Layout/ProfilesList";
import RoleFiler from "../components/Layout/RoleFilter";
import RoleFilter from "../components/Layout/RoleFilter";

export default class Board extends Component {
  state = {
    profilesList: [],
    srchResults: [],
    userRole: null,
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

  filterBySeason = (season) => this.setState({ season });
  filterByRole = (userRole) => this.setState({ userRole });

  render() {
    const { srchResults, userRole } = this.state;
    const profilesToShow = srchResults.filter(
      (profiles) =>
        (profiles.username != this.props.user.username && userRole === null) ||
        userRole === profiles.userRole
    );
    return (
      <>
        <h1>Hello this is the Board page</h1>
        <div className='box m-3'>
          <RoleFilter onFilterRole={this.filterByRole} />
          <Searchbar onHandleSearch={this.handleSearch} />
        </div>
        <div>
          <div className='columns is-multiline p-3'>
            <ProfilesList profilesList={profilesToShow} />
          </div>
        </div>
      </>
    );
  }
}
