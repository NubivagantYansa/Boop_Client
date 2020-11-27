import React from "react";
import { Link } from "react-router-dom";
import FeatBorFilter from "../../Layout/FiltersCard/FeaturesFilter";
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
        <div className='container '>
          <div className='row p-2' id='link'>
            <div className='col-sm d-flex justify-content-center'>
              <div className='btn-group d-block'>
                <button className='btn  btn-lg choice m-1'>
                  Dogsitters
                  <img
                    className='rounded mx-auto d-block'
                    src='/icons/dogsitter.png'
                  />
                </button>
                <button className='btn  btn-lg choice m-1'>
                  Dog owners
                  <img
                    className='rounded mx-auto d-block'
                    src='/icons/dog-white.png'
                  />
                </button>
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
