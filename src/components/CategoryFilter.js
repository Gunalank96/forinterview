import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const CategoryFilter = () => {
  const { setFilter, setSortOrder } = useContext(ProductContext);

  return (
    <div className="filter-container">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort by Price: Low to High</option>
        <option value="desc">Sort by Price: High to Low</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
