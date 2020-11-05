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
      .catch((error) => console.log(error));
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
    <div>
      <div>
        {userRole === "Dog owner" ? <h1>My ID:</h1> : <h1>My peferences</h1>}
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
                value={features.size}
                onChange={handleChangeFeat}
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
                value={features.energy}
                onChange={handleChangeFeat}
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
                value={features.behaves}
                onChange={handleChangeFeat}
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
                value={features.pottyTraining}
                onChange={handleChangeFeat}
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
                value={features.chill}
                onChange={handleChangeFeat}
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
      </span>
    </div>
  );
};

export default SignupFeatures;

// export default class FeaturesInfo extends Component {
//   state = {
//     breed: "",
//     size: "",
//     energy: "",
//     behaves: "",
//     pottyTraining: "",
//     chill: "",
//     features: {},
//     errorMessage: "",
//     breedsList: [],
//     results: [],
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = () => {
//     getAllBreeds()
//       .then((breedsList) => {
//         this.setState({ breedsList: breedsList });
//       })
//       .catch((error) =>
//         console.log("Error occurred while fetching the breeds", error)
//       );
//   };

//   handleChangeFeat = (event) => {
//     const { name, value } = event.target;
//     this.setState(
//       {
//         [name]: value,
//       },
//       () => {
//         this.handleSearchBreed(value);
//         this.addFeatures();
//       }
//     );
//   };

//   addFeatures = () => {
//     const { breed, size, energy, behaves, pottyTraining, chill } = this.state;
//     this.setState(
//       {
//         features: {
//           breed,
//           size,
//           energy,
//           behaves,
//           pottyTraining,
//           chill,
//         },
//       },
//       () => this.props.handleChangeFeatures(this.state.features)
//     );
//   };

//   handleSearchBreed = (value) => {
//     const srchBreedResults = this.state.breedsList.filter((breed) =>
//       breed.toLowerCase().trim().includes(value.toLowerCase().trim())
//     );
//     this.setState({ results: srchBreedResults });
//   };

//   render() {
//     const { userRole } = this.props.stateInfo;
//     const { breed, size, energy, behaves, pottyTraining, chill } = this.state;
//     return (
//       <div>
//         <div>
//           {userRole === "Dog owner" ? <h1>My ID:</h1> : <h1>My peferences</h1>}
//         </div>
//         {/*
//                       breed
//  */}
//         <div className='field column'>
//           <label className='label'>Breed</label>
//           <div className='control'>
//             <input
//               className='input'
//               placeholder='Pinsher'
//               name='breed'
//               value={breed}
//               onChange={this.handleChangeFeat}
//               required
//               type='text'
//             />
//             <Suggestions
//               results={this.state.results}
//               selectedBreed={(breed) => {
//                 this.setState({ breed, results: [] }, () => this.addFeatures());
//               }}
//             />
//           </div>
//         </div>
//         {/*
//                       size
//  */}
//         <span className='columns is-desktop'>
//           <div className='field column'>
//             <label className='label'>Size</label>
//             <div className='control'>
//               <div className='select'>
//                 <select
//                   name='size'
//                   value={size}
//                   onChange={this.handleChangeFeat}
//                   required
//                 >
//                   <option className='is-unselectable' value='none'>
//                     none
//                   </option>
//                   <option value='Small'>Small</option>
//                   <option value='Medium'>Medium</option>
//                   <option value='Large'>Large</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/*
//                           energy
//  */}
//           <div className='field column'>
//             <label className='label'>Energy levels</label>
//             <div className='control'>
//               <div className='select'>
//                 <select
//                   name='energy'
//                   value={energy}
//                   onChange={this.handleChangeFeat}
//                   required
//                 >
//                   <option className='is-unselectable' value='none'>
//                     none
//                   </option>
//                   <option value='Tornado'>Tornado</option>
//                   <option value='Chilled'>Chilled</option>
//                   <option value='Couch potato'>Couch Potato</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/*
//                           training
//  */}
//           <div className='field column'>
//             <label className='label'>Training</label>
//             <div className='control'>
//               <div className='select'>
//                 <select
//                   name='behaves'
//                   value={behaves}
//                   onChange={this.handleChangeFeat}
//                   required
//                 >
//                   <option className='is-unselectable' value='none'>
//                     none
//                   </option>
//                   <option value='Soldier'>Soldier</option>
//                   <option value='I kinda get it'>I kinda get it</option>
//                   <option value='huh?'>huh?</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </span>

//         <span className='columns is-desktop'>
//           {/*
//                           potty training
//  */}
//           <div className=' field column'>
//             <label className='label'>Potty training</label>
//             <div className='control'>
//               <div className='select'>
//                 <select
//                   name='pottyTraining'
//                   value={pottyTraining}
//                   onChange={this.handleChangeFeat}
//                   required
//                 >
//                   <option className='is-unselectable' value='none'>
//                     none
//                   </option>
//                   <option value='Expert'>Expert</option>
//                   <option value='Okay'>Okay</option>
//                   <option value='Ouch!'>Ouch!</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/*
//                           I like to chill
//  */}
//           <div className='field column'>
//             <label className='label'>I like to chill</label>
//             <div className='control'>
//               <div className='select'>
//                 <select
//                   name='chill'
//                   value={chill}
//                   onChange={this.handleChangeFeat}
//                   required
//                 >
//                   <option className='is-unselectable' value='none'>
//                     none
//                   </option>
//                   <option value='Outdoor'>Outdoor</option>
//                   <option value='Indoor'>Indoor</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </span>
//       </div>
//     );
//   }
// }
