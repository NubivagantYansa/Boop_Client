import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    srchwrd: "",
  };

  handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    this.props.onHandleSearch(value);
    this.setState({ srchwrd: value });
  };

  render() {
    return (
      <div className='mt-3'>
        <label>Search keyword: </label>
        <input
          type='text'
          name='srchwrd'
          placeholder='dog lover'
          value={this.state.srchwrd}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
