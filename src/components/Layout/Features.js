import React from "react";
// import { getAllBreeds } from "../../services/breedsService";

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
    userRole,
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
      <div>{errorMessage !== "" && errorMessage}</div>
      <div>
        {userRole === "Dog owner" ? <h1>My ID:</h1> : <h1>My peferences</h1>}
      </div>

      {/* 
                            size
       */}
      <span className='columns is-desktop'>
        <div className='field column'>
          <label className='label'>
            Size <span>📐</span>
          </label>
          <div className='control'>
            <div className='select'>
              <select
                name='size'
                value={size}
                onChange={props.handleChange}
                required
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
          <label className='label'>Energy levels</label>
          <div className='control'>
            <div className='select'>
              <select
                name='energy'
                value={energy}
                onChange={props.handleChange}
                required
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
          <label className='label'>Training</label>
          <div className='control'>
            <div className='select'>
              <select
                name='behaves'
                value={behaves}
                onChange={props.handleChange}
                required
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
          <label className='label'>Potty training</label>
          <div className='control'>
            <div className='select'>
              <select
                name='pottyTraining'
                value={pottyTraining}
                onChange={props.handleChange}
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
          <label className='label'>I like to chill</label>
          <div className='control'>
            <div className='select'>
              <select
                name='chill'
                value={chill}
                onChange={props.handleChange}
                required
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
          <label className='label'>Breed</label>
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
