import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    srchwrd: "",
  };

  handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    this.props.handleSearch(value);
    this.setState({ srchwrd: value });
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

  render() {
    return (
      <div className='m-3'>
        <label>Search keyword: </label>
        <input
          type='text'
          name='srchwrd'
          placeholder='dog lover'
          value={this.state.srchwrd}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
