import React, { Component } from "react";
import { getAllBreeds } from "../../services/breedsService";
//don't forget conditional rendering for the forms if they are dogsitters or dog owners

const Features = (props) => {
  //I TRIED TO DO GET BREEDS FROM APIs
  // componentDidMount() {
  //   props.fetchData();
  // }

  // fetchData() {
  //   getAllBreeds()
  //     .then((breedsList) => {
  //       props.setState({ breedsList });
  //       console.log("breeds", props.state.breedsList);
  //     })
  //     .catch((error) =>
  //       console.log("Error occurred while fetching the breeds", error)
  //     );
  // }

  const {
    size,
    energy,
    behaves,
    pottyTraining,
    chill,
    breed,
    errorMessage,
  } = props.state;
  console.log("this props FEATURES", props);
  return (
    <div>
      {errorMessage !== "" && errorMessage}
      <h1>Features</h1>
      {/* 
                            size
       */}
      <span className='columns is-desktop'>
        <div className='field column'>
          <label className='label'>Size 📐</label>
          <div className='control'>
            <div className='select'>
              <select
                name='size'
                value={size}
                onChange={props.handleChange}
                required
              >
                {/* value none to be grayed out */}
                <option value='none'>none</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
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
                onChange={props.handleChange}
                required
              >
                {/* value none to be grayed out */}
                <option value='none'>none</option>
                <option value='tornado'>Tornado</option>
                <option value='chilled'>Chilled</option>
                <option value='couch potato'>Couch Potato</option>
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
                onChange={props.handleChange}
                required
              >
                {/* value none to be grayed out */}
                <option value='none'>none</option>
                <option value='soldier'>Soldier</option>
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
                onChange={props.handleChange}
                required
              >
                {/* value none to be grayed out */}
                <option value='none'>none</option>
                <option value='expert'>Expert</option>
                <option value='okay'>Okay</option>
                <option value='ouch'>Ouch!</option>
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
                name='chill'
                value={chill}
                onChange={props.handleChange}
                required
              >
                {/* value none to be grayed out */}
                <option value='none'>none</option>
                <option value='outdoor'>Outdoor</option>
                <option value='indoor'>Indoor</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field column'>
          <label className='label'>Breed 🐕: </label>
          <div className='control'>
            <input
              className='input'
              placeholder='Pinsher'
              name='breed'
              value={breed}
              onChange={props.handleChange}
              required
              type='text'
            />
          </div>
        </div>
      </span>
    </div>
  );
};

export default Features;
