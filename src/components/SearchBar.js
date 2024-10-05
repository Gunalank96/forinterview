import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
