import React from "react";

const Suggestions = (props) => {
  if (props.results) {
    const options = props.results.map((result, idx) => (
      <li onClick={() => props.selectedBreed(result)} key={idx}>
        {result}
      </li>
    ));
    return <ul>{options}</ul>;
  } else {
    return <div></div>;
  }
};

export default Suggestions;
