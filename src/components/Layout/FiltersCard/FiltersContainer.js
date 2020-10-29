import React, { Component } from "react";
import FeaturesFilter from "./FeatBorFilter";
import RoleFilter from "./RoleFilter";
import Searchbar from "./Searchbar";

export default class Filters extends Component {
  state = {
    expand: false,
  };

  readMore = (e) => {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  };

  render() {
    return (
      <div className='content'>
        <RoleFilter onFilterRole={this.props.onFilterRole} />
        <Searchbar handleSearch={this.props.handleSearch} />
        <a href='#' onClick={this.readMore}>
          {this.state.expand ? "Read Less" : "More Filters"}
        </a>
        <div className='content mt-3'>
          {this.state.expand && (
            <FeaturesFilter onFilterFeatures={this.props.onFilterFeatures} />
          )}
        </div>
      </div>
    );
  }
}
