import React, { Component } from "react";
import { getAllProfiles } from "../../services/communityService";
import ProfilesList from "../Layout/ProfilesList";
import RoleFilter from "../Layout/FiltersCard/RoleFilter";
import Searchbar from "../Layout/FiltersCard/Searchbar";
import FeatBorFilter from "../Layout/FiltersCard/FeatBorFilter";

export default class Board extends Component {
  state = {
    profilesList: [],
    srchResults: [],
    expand: false,
    userRole: null,
    boroughSelection: null,
    size: null,
    energy: null,
    behaves: null,
    pottyTraining: null,
    chill: null,
    breed: null,
  };

  componentDidMount = () => {
    getAllProfiles()
      .then((profilesList) => {
        this.setState({
          profilesList: profilesList.profilesList,
          srchResults: profilesList.profilesList,
        });
      })
      .catch((error) => console.log(error));
  };
  //handle the search bar
  handleSearch = (value) => {
    const srchResults = this.state.profilesList.filter((profile) => {
      return Object.values(profile).some(
        (values) =>
          console.log(values) ||
          values.toString().toLowerCase().includes(value.toLowerCase())
      );
    });
    this.setState({
      srchResults: srchResults,
    });
  };
  //filters by user role
  filterRole = (userRole) => this.setState({ userRole });

  //filters by dog features
  filterFeatures = (size, energy, behaves, pottyTraining, chill, breed) => {
    this.setState({
      size,
      energy,
      behaves,
      pottyTraining,
      chill,
      breed,
    });
  };

  //expands filters card
  readMore = (e) => {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  };

  clearFilters = () => {
    return this.setState({
      userRole: null,
      boroughSelection: null,
      size: null,
      energy: null,
      behaves: null,
      pottyTraining: null,
      chill: null,
      breed: null,
    });
  };

  render() {
    const {
      srchResults,
      userRole,
      size,
      energy,
      behaves,
      pottyTraining,
      chill,
      breed,
    } = this.state;

    //variable controls profiles showed on the board - checks if any filter is applied
    let profilesToShow = srchResults.filter((profiles) => {
      const isNotCurrUser = profiles.username !== this.props.user.username;
      const isUserRole = userRole === null || userRole === profiles.userRole;
      const isSize =
        !size ||
        profiles.features.size.toLowerCase().trim() ===
          size.toLowerCase().trim();
      const isEnergy =
        !energy ||
        profiles.features.energy.toLowerCase().trim() ===
          energy.toLowerCase().trim();
      const isBehaves =
        !behaves ||
        profiles.features.behaves.toLowerCase().trim() ===
          behaves.toLowerCase().trim();
      const isPottyTraining =
        !pottyTraining ||
        profiles.features.pottyTraining.toLowerCase().trim() ===
          pottyTraining.toLowerCase().trim();
      const isChill =
        !chill ||
        profiles.features.chill.toLowerCase().trim() ===
          chill.toLowerCase().trim();
      const isBreed =
        !breed ||
        profiles.features.breed.toLowerCase().trim() ===
          breed.toLowerCase().trim();
      return (
        isNotCurrUser &&
        isUserRole &&
        isSize &&
        isEnergy &&
        isBehaves &&
        isPottyTraining &&
        isChill &&
        isBreed
      );
    });

    return (
      <>
        <h1>Hello this is the Board page</h1>
        <div className='box m-3'>
          <RoleFilter filterRole={this.filterRole} />
          <Searchbar handleSearch={this.handleSearch} />
          <a href='#' onClick={this.readMore}>
            {this.state.expand ? "Read Less" : "More Filters"}
          </a>
          <div className='content mt-3'>
            {this.state.expand && (
              <FeatBorFilter filterFeatures={this.filterFeatures} />
            )}
            <button onClick={this.clearFilters}>Clear Filters</button>
          </div>
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
