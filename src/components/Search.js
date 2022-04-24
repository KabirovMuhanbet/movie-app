import React from "react";

const Search = ({setSearchValue, searchValue, handleSubmit}) => {
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-group flex-nowrap">
        <input
          className="search-input"
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
    </form>
  );
};

export default Search;
