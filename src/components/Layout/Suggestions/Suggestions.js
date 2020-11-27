import React from "react";

const Suggestions = (props) => {
  if (props.results) {
    const options = props.results.map((result, idx) => (
      <li
        className='list-group-item '
        onClick={() => props.selectedBreed(result)}
        key={idx}
      >
        {result}
      </li>
    ));
    return <ul className='text-decoration-none list-group'>{options}</ul>;
  } else {
    return <div></div>;
  }
};

export default Suggestions;
