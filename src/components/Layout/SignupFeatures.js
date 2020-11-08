import React, { Component, useEffect, useState } from "react";
import { getAllBreeds } from "../../services/breedsService";
import Suggestions from "./Suggestions";

const SignupFeatures = (props) => {
  const [features, setFeatures] = useState({});
  const [breedsList, setBreedsList] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    getAllBreeds()
      .then((breedsList) => {
        setBreedsList(breedsList);
      })
      .catch((error) =>
        console.log("Error occurred while fetching the breeds", error)
      );
  }, []);

  useEffect(() => {
    props.handleChangeFeatures(features);
  }, [features]);

  function handleChangeFeat(e) {
    const { name, value } = e.target;
    setFeatures({ ...features, [name]: value });
    handleSearchBreed(value);
    console.log("features", features);
  }

  const handleSearchBreed = (value) => {
    const srchBreedResults = breedsList.filter((breed) =>
      breed.toLowerCase().trim().includes(value.toLowerCase().trim())
    );
    console.log(srchBreedResults);
    setResults(srchBreedResults);
  };

  const { userRole } = props.stateInfo;

  return (
    <div className='container shadow p-3 mb-2 bg-white rounded'>
      <div className='row'>
        {userRole === "Dog owner" ? (
          <div className='d-inline-flex p-2'>
            <span className='mr-2'>
              <img src='/icons/dog.png' />
            </span>
            <span>
              <h1> ID:</h1>
            </span>
          </div>
        ) : (
          <div className='d-inline-flex p-2'>
            <span className='mr-2'>
              <img src='/icons/dog.png' />
            </span>
            <span>
              <h1> picks:</h1>
            </span>
          </div>
        )}
      </div>

      {/*
                      size
 */}
      <div className='square p-2'>
        <div className='row p-2'>
          <div className='col-sm'>
            <label>Size</label>

            <select
              className='form-control'
              name='size'
              value={features.size}
              onChange={handleChangeFeat}
              required
            >
              <option value='none'>none</option>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
            </select>
          </div>
          {/*
                          energy
 */}
          <div className='col-sm'>
            <label>Energy levels</label>

            <select
              className='form-control'
              name='energy'
              value={features.energy}
              onChange={handleChangeFeat}
              required
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
              value={features.behaves}
              onChange={handleChangeFeat}
              required
            >
              <option value='none'>none</option>
              <option value='Soldier'>Soldier</option>
              <option value='I kinda get it'>I kinda get it</option>
              <option value='huh?'>huh?</option>
            </select>
          </div>
        </div>

        {/*
                          potty training
 */}
        <div className='row p-2'>
          <div className='col-sm'>
            <label>Potty training</label>

            <select
              className='form-control'
              name='pottyTraining'
              value={features.pottyTraining}
              onChange={handleChangeFeat}
              required
            >
              <option value='none'>none</option>
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
              value={features.chill}
              onChange={handleChangeFeat}
              required
            >
              <option value='none'>none</option>
              <option value='Outdoor'>Outdoor</option>
              <option value='Indoor'>Indoor</option>
            </select>
          </div>
          {/*
                      breed
 */}

          <div className='col-sm'>
            <label>Breed</label>

            <input
              className='form-control'
              placeholder='Pinsher'
              name='breed'
              value={features.breed}
              onChange={handleChangeFeat}
              required
              type='text'
            />
            <Suggestions
              results={results}
              selectedBreed={(breed) => {
                setFeatures({ ...features, breed });
                setResults([]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFeatures;
