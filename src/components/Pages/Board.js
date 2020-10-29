import React, { Component } from "react";
import { getAllProfiles } from "../../services/communityService";
import ProfilesList from "../Layout/ProfilesList";
import Filters from "../Layout/FiltersCard/FiltersContainer";

export default class Board extends Component {
  state = {
    profilesList: [],
    srchResults: [],
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

  filterByRole = (userRole) => this.setState({ userRole });

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
          chill.toLowerCase().trim();
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
          <Filters
            onFilterRole={this.filterByRole}
            handleSearch={this.handleSearch}
            onFilterFeatures={this.filterFeatures}
          />
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
