import React from 'react';

const SearchBar = ({ setSearchQuery  }) => {
  

  return (
    <input
    type="text"
    className="form-control my-3"
    placeholder="Search profiles..."
    onChange={(e) => setSearchQuery(e.target.value)}
  />
);
};


export default SearchBar;
