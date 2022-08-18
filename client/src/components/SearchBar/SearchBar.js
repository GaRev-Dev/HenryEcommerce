import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [name, setName] = useState("");
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <div className="divSearchBar">
      <input
        className="inputSearchBar"
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Phone..."
      />
      <button className="btnSearchBar" type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
