import React from "react";
import { Link } from "react-router-dom";
import FeatBorFilter from "../Layout/FiltersCard/FeatBorFilter";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className=' background-image shadow p-3 mb-5 bg-white rounded '>
        <div className='title p-3 text-center'>
          <h2 className='display-4'>Local, Loving Pet Care</h2>
          <h4 className='p-3 lead'>
            Book trusted sitters and dog walkers who'll treat your pets like
            family or join ad dog owner and join the community and wait for a
            dogsitter to get in touch with you!
          </h4>
        </div>
      </div>
      <div className='text-center band p-3'>
        <p className='lead'>
          Perfect if you need overnight pet care or house-sitting services. Get
          in touch whenever your dog needs a walk or ask for daytime pet care in
          your sitter’s dog-friendly home.
        </p>
        <h5 className=' p-2 m-1 '>Why not organise a play date?</h5>
      </div>
      <Link to='/login'>
        <div className='container shadow p-3 mb-5 bg-white rounded'>
          <div className='p-2' id='link'>
            <div className='col'>
              <p>I am looking for: </p>
            </div>
            <div className='col'>
              <div
                className='btn-group'
                role='group'
                aria-label='Basic example'
              >
                <button className='btn btn-secondary'> Dogsitters</button>
                <button className='btn btn-secondary'> Dog owners</button>
              </div>
            </div>
          </div>
          <div className='row' id='link'>
            <FeatBorFilter className='row' />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
