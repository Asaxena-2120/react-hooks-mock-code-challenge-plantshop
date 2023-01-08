import React from "react";

function Search({onSearchSet}) {
  function handleChange(e){
    onSearchSet(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange = {handleChange}
        //onChange={(e) => console.log("Searching...",e.target.value)}
      />
    </div>
  );
}

export default Search;
