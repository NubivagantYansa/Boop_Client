import React, { useState, useEffect } from "react";
import { getAllBreeds } from "../../services/breedsService";
import { useUser } from "../context/userContext";
import Suggestions from "./Suggestions";

const EditFeatures = () => {
  const { user, setUser } = useUser();
  const { breed, size, behaves, energy, pottyTraining, chill } = user.features;
  const [breedsList, setBreedsList] = useState("");
  const [results, setResults] = useState("");
  const [errorMerrage, setErrorMessage] = useState("");

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
    console.log("triggered", value);
    if (value === "") {
      return;
    }
    const srchBreedResults = breedsList.filter((breed) =>
      breed.toLowerCase().trim().includes(value.toLowerCase().trim())
    );
    setResults(srchBreedResults);
  };

  return (
    <div>
      <div>
        {user.userRole === "Dog owner" ? (
          <h1>My ID:</h1>
        ) : (
          <h1>My peferences</h1>
        )}
      </div>
      {/* 
                        breed
   */}
      <div className='field column'>
        <label className='label'>Breed</label>
        <div className='control'>
          <input
            className='input'
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
      </div>
      {/* 
                        size
   */}
      <span className='columns is-desktop'>
        <div className='field column'>
          <label className='label'>Size</label>
          <div className='control'>
            <div className='select'>
              <select
                name='size'
                value={size}
                onChange={handleChangeFeat}
                required
              >
                <option value='none'>none</option>
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
                onChange={handleChangeFeat}
                required
              >
                <option value='none'>none</option>
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
                onChange={handleChangeFeat}
                required
              >
                <option value='none'>none</option>
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
                onChange={handleChangeFeat}
                required
              >
                <option value='none'>none</option>
                <option value='Outdoor'>Outdoor</option>
                <option value='Indoor'>Indoor</option>
              </select>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};
export default EditFeatures;
// export default class FeaturesInfo extends Component {
//   state = {
//     breed: this.props.user.features.breed,
//     size: this.props.user.features.size,
//     energy: this.props.user.features.energy,
//     behaves: this.props.user.features.behaves,
//     pottyTraining: this.props.user.features.pottyTraining,
//     chill: this.props.user.features.chill,
//     features: {},
//     errorMessage: "",
//     breedsList: [],
//     results: [],
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

// fetchData = () => {
//   getAllBreeds()
//     .then((breedsList) => {
//       this.setState({ breedsList: breedsList });
//     })
//     .catch((error) =>
//       console.log("Error occurred while fetching the breeds", error)
//     );
// };

// handleChangeFeat = (event) => {
//   const { name, value } = event.target;
//   this.setState(
//     {
//       [name]: value,
//     },
//     () => {
//       this.handleSearchBreed(value);
//       this.addFeatures();
//     }
//   );
// };

// addFeatures = () => {
//   const { breed, size, energy, behaves, pottyTraining, chill } = this.state;
//   this.setState(
//     {
//       features: {
//         breed,
//         size,
//         energy,
//         behaves,
//         pottyTraining,
//         chill,
//       },
//     },
//     () => {
//       console.log("uffaaaaaaaaa", this.state.features);
//       this.props.handleChangeFeatures(this.state.features);
//     }
//   );
// };

// handleSearchBreed = (value) => {
//   const srchBreedResults = this.state.breedsList.filter((breed) =>
//     breed.toLowerCase().trim().includes(value.toLowerCase().trim())
//   );
//   this.setState({ results: srchBreedResults });
// };

//   saveBreedValue = (value) => {
//     this.setState({ results: value });
//   };

//   render() {
//     const { userRole } = this.props.user;
//     const { breed, size, energy, behaves, pottyTraining, chill } = this.state;
//     return (

//     );
//   }
// }
