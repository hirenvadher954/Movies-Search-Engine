import React from "react";

function Search({ handleInput, search }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Movies,TV,Anime.."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
