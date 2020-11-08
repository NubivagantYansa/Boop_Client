import React, { Component } from "react";

export default class FeaturesFilter extends Component {
  state = {
    boroughSelection: "",
    size: "",
    energy: "",
    behaves: "",
    pottyTraining: "",
    chill: "",
    breed: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.filterFeatures(
          this.state.size,
          this.state.energy,
          this.state.behaves,
          this.state.pottyTraining,
          this.state.chill,
          this.state.breed
        );
      }
    );

    return;
  };

  render() {
    const { size, energy, behaves, pottyTraining, chill, breed } = this.state;

    return (
      <div className='container shadow p-3 mb-5 bg-white rounded'>
        {/* 
                            size
       */}

        <div className='square p-2'>
          <div className='row p-2'>
            <div className='col-sm'>
              <label>Size </label>

              <select
                className='form-control'
                name='size'
                value={size}
                onChange={this.handleChange}
              >
                <option value=''>none</option>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
              </select>
            </div>
            {/* 
                                energy
       */}
            <div className='col-sm'>
              <label>Energy levels </label>

              <select
                className='form-control'
                name='energy'
                value={energy}
                onChange={this.handleChange}
              >
                <option value='none'>none</option>
                <option value='Tornado'>Tornado</option>
                <option value='Chilled'>Chilled</option>
                <option value='Couch potato'>Couch Potato</option>
              </select>
            </div>
            {/* 
                                training
       */}
            <div className='col-sm'>
              <label>Training</label>

              <select
                className='form-control'
                name='behaves'
                value={behaves}
                onChange={this.handleChange}
              >
                <option value=''>none</option>
                <option value='Soldier'>Soldier</option>
                <option value='I kinda get it'>I kinda get it</option>
                <option value='huh?'>huh?</option>
              </select>
            </div>
            {/* 
                                potty training
       */}
          </div>
          <div className='row p-2'>
            <div className='col-sm'>
              <label>Potty training</label>

              <select
                className='form-control'
                name='pottyTraining'
                value={pottyTraining}
                onChange={this.handleChange}
                required
              >
                <option value=''>none</option>
                <option value='Expert'>Expert</option>
                <option value='Okay'>Okay</option>
                <option value='Ouch!'>Ouch!</option>
              </select>
            </div>
            {/* 
                                I like to chill
       */}
            <div className='col-sm'>
              <label>I like to chill</label>

              <select
                className='form-control'
                name='chill'
                value={chill}
                onChange={this.handleChange}
              >
                <option value=''>none</option>
                <option value='Outdoor'>Outdoor</option>
                <option value='Indoor'>Indoor</option>
              </select>
            </div>

            <div className='col-sm'>
              <label>Breed </label>

              <input
                className='form-control'
                placeholder='Pinsher'
                name='breed'
                value={breed}
                onChange={this.handleChange}
                type='text'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
