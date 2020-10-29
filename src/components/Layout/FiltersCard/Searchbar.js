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
