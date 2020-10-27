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
        this.props.onFilterFeatures(
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
      <div>
        {/* 
                            size
       */}
        <span className='columns is-desktop'>
          <div className='field column'>
            <label className='label'>Size 📐</label>
            <div className='control'>
              <div className='select'>
                <select name='size' value={size} onChange={this.handleChange}>
                  <option className='is-unselectable' value=''>
                    none
                  </option>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                </select>
              </div>
            </div>
          </div>
          {/* 
                                energy
       */}
          <div className='field column'>
            <label className='label'>Energy levels 🔋</label>
            <div className='control'>
              <div className='select'>
                <select
                  name='energy'
                  value={energy}
                  onChange={this.handleChange}
                >
                  <option className='is-unselectable' value='none'>
                    none
                  </option>
                  <option value='Tornado'>Tornado</option>
                  <option value='Chilled'>Chilled</option>
                  <option value='Couch potato'>Couch Potato</option>
                </select>
              </div>
            </div>
          </div>
          {/* 
                                training
       */}
          <div className='field column'>
            <label className='label'>Training 📚</label>
            <div className='control'>
              <div className='select'>
                <select
                  name='behaves'
                  value={behaves}
                  onChange={this.handleChange}
                >
                  <option className='is-unselectable' value=''>
                    none
                  </option>
                  <option value='Soldier'>Soldier</option>
                  <option value='I kinda get it'>I kinda get it</option>
                  <option value='huh?'>huh?</option>
                </select>
              </div>
            </div>
          </div>
        </span>

        <span className='columns is-desktop'>
          {/* 
                                potty training
       */}
          <div className=' field column'>
            <label className='label'>Potty training 🚽</label>
            <div className='control'>
              <div className='select'>
                <select
                  name='pottyTraining'
                  value={pottyTraining}
                  onChange={this.handleChange}
                  required
                >
                  <option className='is-unselectable' value=''>
                    none
                  </option>
                  <option value='Expert'>Expert</option>
                  <option value='Okay'>Okay</option>
                  <option value='Ouch!'>Ouch!</option>
                </select>
              </div>
            </div>
          </div>
          {/* 
                                I like to chill
       */}
          <div className='field column'>
            <label className='label'>I like to chill 🐾 </label>
            <div className='control'>
              <div className='select'>
                <select name='chill' value={chill} onChange={this.handleChange}>
                  <option className='is-unselectable' value=''>
                    none
                  </option>
                  <option value='Outdoor'>Outdoor</option>
                  <option value='Indoor'>Indoor</option>
                </select>
              </div>
            </div>
          </div>

          <div className='field column'>
            <label className='label'>Breed 🐕 </label>
            <div className='control'>
              <input
                className='input'
                placeholder='Pinsher'
                name='breed'
                value={breed}
                onChange={this.handleChange}
                type='text'
              />
            </div>
          </div>
        </span>
      </div>
    );
  }
}
