import React, { Component, useState } from "react";

export default function Searchbar({ handleSearch }) {
  const [srchwrd, setSrchwrd] = useState("");

  const handleOnChange = (e) => {
    const {
      target: { value },
    } = e;
    handleSearch(value);
    setSrchwrd(value);
  };

  return (
    <div className='d-flex justify-content-center mt-4 w-50'>
      <input
        className='form-control text-center'
        type='text'
        name='srchwrd'
        placeholder='Search keyword'
        value={srchwrd}
        onChange={handleOnChange}
      />
    </div>
  );
}
