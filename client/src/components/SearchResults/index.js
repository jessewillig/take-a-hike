import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="trails-list search-results">
      <li className="trails-list-item">
        <h2>{props.name}</h2>
      </li>
    </ul>
  );
}

export default SearchResults