import React, { Component } from "react";
//don't forget conditional rendering for the forms if they are dogsitters or dog owners
export default class Features extends Component {
  state = {
    breed: "",
    size: "",
    energy: "",
    behaves: "",
    pottyTrain: "",
    chill: "",
    errorMessage: "",
  };
  render() {
    const {
      size,
      energy,
      behaves,
      pottyTrain,
      chill,
      breed,
      errorMessage,
    } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        <h1>Features</h1>

        <label>Size</label>
        <select name='size' value={size} onChange={this.handleChange} required>
          {/* value none to be grayed out */}
          <option value='none'>none</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>

        <label>Energy levels</label>
        <select
          name='energy'
          value={energy}
          onChange={this.handleChange}
          required
        >
          {/* value none to be grayed out */}
          <option value='none'>none</option>
          <option value='tornado'>Tornado</option>
          <option value='chilled'>Chilled</option>
          <option value='couch potato'>Couch Potato</option>
        </select>

        <label>Training</label>
        <select
          name='behaves'
          value={behaves}
          onChange={this.handleChange}
          required
        >
          {/* value none to be grayed out */}
          <option value='none'>none</option>
          <option value='soldier'>Soldier</option>
          <option value='I kinda get it'>I kinda get it</option>
          <option value='huh?'>huh?</option>
        </select>
        <br />
        <label>Potty training level</label>
        <select
          name='pottyTrain'
          value={pottyTrain}
          onChange={this.handleChange}
          required
        >
          {/* value none to be grayed out */}
          <option value='none'>none</option>
          <option value='expert'>Small</option>
          <option value='okay'>Okay</option>
          <option value='ouch'>Ouch!</option>
        </select>

        <label>I liek to chill</label>
        <select
          name='chill'
          value={chill}
          onChange={this.handleChange}
          required
        >
          {/* value none to be grayed out */}
          <option value='none'>none</option>
          <option value='outdoor'>Outdoor</option>
          <option value='indoor'>Indoor</option>
        </select>
        <label>Breed: </label>
        <input
          name='breed'
          value={breed}
          onChange={this.handleChange}
          required
          type='text'
        />
      </div>
    );
  }
}
