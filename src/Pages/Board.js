import React, { Component } from "react";
import { getAllProfiles } from "../services/communityService";
import Searchbar from "../components/Layout/FiltersCard/Searchbar";
import ProfilesList from "../components/Layout/ProfilesList";
import RoleFilter from "../components/Layout/FiltersCard/RoleFilter";
import Filters from "../components/Layout/FiltersCard/Filters";

export default class Board extends Component {
  state = {
    profilesList: [],
    srchResults: [],
    userRole: null,
    boroughSelection: null,
    sizeSelection: null,
    energySelection: null,
    behavesSelection: null,
    pottyTrainingSelection: null,
    chillSelection: null,
    breedSelection: null,
  };

  componentDidMount = () => {
    console.log("BOARD", this.props);
    getAllProfiles()
      .then((profilesList) => {
        this.setState({
          profilesList: profilesList.profilesList,
          srchResults: profilesList.profilesList,
        });
        // console.log("THIS STATE", this.state);
      })
      .catch((error) => console.log(error));
  };

  // componentDidUpdate = () => {
  //   console.log("LALALALALA", this.state);
  // };

  handleSearch = (value) => {
    console.log("I am the blooooody value", value);
    const srchResults = this.state.profilesList.filter(
      (profile) => {
        // console.log("loooook here", Object.values(profile));

        return Object.values(profile).some(
          (values) =>
            console.log(values) ||
            values.toString().toLowerCase().includes(value.toLowerCase())
        );
      }
      // Object.key(profile).some(key => profile[key].toLowerCase().includes(value.toLowerCase()))
    );
    this.setState({
      srchResults: srchResults,
    });
  };

  filterByRole = (userRole) => this.setState({ userRole });

  filterFeatures = (
    sizeSelection,
    energySelection,
    behavesSelection,
    pottyTrainingSelection,
    chillSelection,
    breedSelection
  ) =>
    this.setState({
      sizeSelection,
      energySelection,
      behavesSelection,
      pottyTrainingSelection,
      chillSelection,
      breedSelection,
    });

  render() {
    const {
      srchResults,
      userRole,
      sizeSelection,
      energySelection,
      behavesSelection,
      pottyTrainingSelection,
      chillSelection,
      breedSelection,
    } = this.state;
    const profilesToShow = srchResults.filter(
      (profiles) =>
        profiles.username != this.props.user.username &&
        (userRole === null || userRole === profiles.userRole)
    );
    // .filter(
    //   (profile) => sizeSelection === " " || sizeSelection === profile.size
    // );
    return (
      <>
        <h1>Hello this is the Board page</h1>
        <div className='box m-3'>
          <Filters
            onFilterRole={this.filterByRole}
            onHandleSearch={this.handleSearch}
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
