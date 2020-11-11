import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading() {
  return (
    <div className='container-fluid loading-background-image'>
      <div className=' d-flex justify-content-center lol'>
        <ReactLoading
          type={"spinningBubbles"}
          color={"#4393AC"}
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
