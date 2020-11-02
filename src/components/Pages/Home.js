import React from "react";
import { Link } from "react-router-dom";
import FeatBorFilter from "../Layout/FiltersCard/FeatBorFilter";

const Home = () => {
  return (
    <div>
      <h1>Hello this is the Landpage</h1>
      <h2>Local, Loving Pet Care</h2>
      <p>
        Book trusted sitters and dog walkers who'll treat your pets like family
        or join ad dog owner and wait for a dogsitter to get in touch with you!
      </p>
      {/* <Link to='/login'>
        <div className='box m-3'>
          <div className='content mt-3'>
            <h4>I am looking for: </h4>
            <button className='button is-info m-3'> Dogsitters</button>
            <button className='button is-info m-3'> Dog owners</button>
          </div>
          <div className='content mt-3'>
            <h4>Filter by: </h4>
            <FeatBorFilter />
          </div>
        </div>
      </Link> */}
      <p>
        Perfect if you need overnight pet care or house-sitting services. Get i
        ntouch wenever your dog needs a walk or ask for daytime pet care in your
        sitter’s dog-friendly home. Why not organise a play date?
      </p>
    </div>
  );
};

export default Home;
