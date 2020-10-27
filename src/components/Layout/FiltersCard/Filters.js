import React, { Component } from "react";
import FeaturesFilter from "./FeaturesFilter";
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
    // console.log("props filters", this.props);
    return (
      <div className='content'>
        <RoleFilter onFilterRole={this.props.onFilterRole} />
        <Searchbar onHandleSearch={this.props.onHandleSearch} />
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
