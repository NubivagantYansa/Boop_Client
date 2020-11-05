import React from "react";
import { getAllBreeds } from "../../services/breedsService";
import Suggestions from "./Suggestions";

const Features = () => {
  const { user, setUser } = useUser();
  const [breedsList, setList] = UserState([]);
  const [results, setResults] = UserState([]);
  const { breed } = user;

  useEffect(() => {
    getAllBreeds()
      .then(({ breedsList }) => {
        setList(breedsList);
        setResults(breedsList);
      })
      .catch((error) =>
        console.log("Error occurred while fetching the breeds", error)
      );
  }, []);

  const handleBreedChange = (e) => {
    const {
      target: { value },
    } = e;
    setUser(value);
    handleSearchBreed(value);
    this.props.handleChangeBreedOnly(value);
  };

  handleSearchBreed = (value) => {
    const srchBreedResults = breedsList.filter((breed) =>
      breed.toLowerCase().trim().includes(value.toLowerCase().trim())
    );
    setResults(srchBreedResults);
  };

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
            value={breed}
            onChange={handleBreedChange}
            required
            type='text'
          />
          <Suggestions results={results} />
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
              <select name='size' value={size} onChange={handleChange} required>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
export default Features;

// state = {
//   breedsList: [],
//   breed: this.props.state.breed,
//   results: "",
// };

// componentDidMount() {
//   this.fetchData();
// }

// fetchData = () => {
//   getAllBreeds()
//     .then((breedsList) => {
//       this.setState({ breedsList: breedsList });
//     })
//     .catch((error) =>
//       console.log("Error occurred while fetching the breeds", error)
//     );
// };
// handleBreedChange = (e) => {
//   const {
//     target: { value },
//   } = e;
//   this.setState({ breed: value });
//   this.handleSearchBreed(value);
//   this.props.handleChangeBreedOnly(value);
// };

// handleSearchBreed = (value) => {
//   const srchBreedResults = this.state.breedsList.filter((breed) =>
//     breed.toLowerCase().trim().includes(value.toLowerCase().trim())
//   );
//   this.setState({ results: srchBreedResults });
// };

// saveBreedValue = (value) => {
//   this.setState({ results: value });
// };

// render() {
//   const {
//     userRole,
//     size,
//     energy,
//     behaves,
//     pottyTraining,
//     chill,
//   } = this.props.state;
