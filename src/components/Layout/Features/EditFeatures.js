import React, { useState, useEffect } from "react";
import { getAllBreeds } from "../../../services/breedsService";
import { useUser } from "../../context/userContext";
import Suggestions from "../Suggestions/Suggestions";

const EditFeatures = () => {
  const { user, setUser } = useUser();
  const { breed, size, behaves, energy, pottyTraining, chill } = user.features;
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

  const handleChangeFeat = (e) => {
    const { name, value } = e.target;

    setUser((u) => ({ ...u, features: { ...u.features, [name]: value } }));
    if (name === "breed") {
      return handleSearchBreed(value);
    }
  };

  const handleSearchBreed = (value) => {
    if (value === "") {
      return;
    }
    const srchBreedResults = breedsList.filter((breed) =>
      breed.toLowerCase().trim().includes(value.toLowerCase().trim())
    );
    setResults(srchBreedResults);
  };

  return (
    <div className='container p-3 mb-2rounded'>
      <div className='row no-gutters'>
        {user.userRole === "Dog owner" ? (
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
                        breed
   */}
      <div className='square p-2'>
        <div className='row p-2'>
          <div className='col-sm'>
            <label>Breed</label>

            <input
              className='form-control'
              placeholder='Pinsher'
              name='breed'
              value={breed}
              onChange={handleChangeFeat}
              required
              type='text'
            />
            <Suggestions
              results={results}
              selectedBreed={(breed) => {
                setUser((u) => ({
                  ...u,
                  features: { ...u.features, breed: breed },
                }));
                setResults([]);
              }}
            />
          </div>
          {/* 
                        size
   */}
          <div className='col-sm'>
            <label>Size</label>

            <select
              className='form-control'
              name='size'
              value={size}
              onChange={handleChangeFeat}
              required
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
            <label>Energy levels</label>
            <select
              className='form-control'
              name='energy'
              value={energy}
              onChange={handleChangeFeat}
              required
            >
              <option value=''>none</option>
              <option value='Tornado'>Tornado</option>
              <option value='Chilled'>Chilled</option>
              <option value='Couch potato'>Couch Potato</option>
            </select>
          </div>
        </div>
        {/* 
                            training
   */}
        <div className='row p-2'>
          <div className='col-sm'>
            <label>Training</label>
            <select
              className='form-control'
              name='behaves'
              value={behaves}
              onChange={handleChangeFeat}
              required
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
          <div className='col-sm'>
            <label>Potty training</label>
            <select
              className='form-control'
              name='pottyTraining'
              value={pottyTraining}
              onChange={handleChangeFeat}
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
              onChange={handleChangeFeat}
              required
            >
              <option value=''>none</option>
              <option value='Outdoor'>Outdoor</option>
              <option value='Indoor'>Indoor</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditFeatures;
