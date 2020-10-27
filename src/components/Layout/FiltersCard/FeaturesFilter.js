import React, { Component } from "react";

export default class FeaturesFilter extends Component {
  state = {
    boroughSelection: "",
    sizeSelection: "",
    energySelection: "",
    behavesSelection: "",
    pottyTrainingSelection: "",
    chillSelection: "",
    breedSelection: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    this.props.onFilterFeatures(
      this.sizeSelection,
      this.energySelection,
      this.behavesSelection,
      this.pottyTrainingSelection,
      this.chillSelection,
      this.breedSelection
    );
  };

  render() {
    const {
      sizeSelection,
      energySelection,
      behavesSelection,
      pottyTrainingSelection,
      chillSelection,
      breedSelection,
    } = this.state;

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
                <select
                  name='sizeSelection'
                  value={sizeSelection}
                  onChange={this.handleChange}
                >
                  <option className='is-unselectable' value='none'>
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
                  name='energySelection'
                  value={energySelection}
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
                  name='behavesSelection'
                  value={behavesSelection}
                  onChange={this.handleChange}
                >
                  <option className='is-unselectable' value='none'>
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
                  name='pottyTrainingSelection'
                  value={pottyTrainingSelection}
                  onChange={this.handleChange}
                  required
                >
                  <option className='is-unselectable' value='none'>
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
                <select
                  name='chillSelection'
                  value={chillSelection}
                  onChange={this.handleChange}
                >
                  <option className='is-unselectable' value='none'>
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
                name='breedSelection'
                value={breedSelection}
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
