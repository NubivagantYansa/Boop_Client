import React, { useState, useEffect } from "react";

export default function FeaturesFilter({ filterFeatures = () => {} }) {
  const [features, setFeatures] = useState({});
  const {
    size = "",
    energy = "",
    behaves = "",
    pottyTraining = "",
    chill = "",
    breed = "",
  } = features;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeatures({ ...features, [name]: value });
  };

  useEffect(() => {
    filterFeatures(size, energy, behaves, pottyTraining, chill, breed);
  }, [features]);

  return (
    <div className='container shadow p-3 mb-5 bg-white rounded'>
      {/* 
                            size
       */}

      <div className='square p-2'>
        <div className='row p-2'>
          <div className='col-sm'>
            <label id='link-board'>Size </label>

            <select
              className='form-control'
              name='size'
              value={size}
              onChange={handleChange}
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
            <label id='link-board'>Energy levels </label>

            <select
              className='form-control'
              name='energy'
              value={energy}
              onChange={handleChange}
            >
              <option value=''>none</option>
              <option value='Tornado'>Tornado</option>
              <option value='Chilled'>Chilled</option>
              <option value='Couch potato'>Couch Potato</option>
            </select>
          </div>
          {/* 
                                training
       */}
          <div className='col-sm'>
            <label id='link-board'>Training</label>

            <select
              className='form-control'
              name='behaves'
              value={behaves}
              onChange={handleChange}
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
            <label id='link-board'>Potty training</label>

            <select
              className='form-control'
              name='pottyTraining'
              value={pottyTraining}
              onChange={handleChange}
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
            <label id='link-board'>I like to chill</label>

            <select
              className='form-control'
              name='chill'
              value={chill}
              onChange={handleChange}
            >
              <option value=''>none</option>
              <option value='Outdoor'>Outdoor</option>
              <option value='Indoor'>Indoor</option>
            </select>
          </div>

          <div className='col-sm'>
            <label id='link-board'>Breed </label>

            <input
              className='form-control'
              placeholder='Pinsher'
              name='breed'
              value={breed}
              onChange={handleChange}
              type='text'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
