import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => product.category.includes(filter))
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <ProductContext.Provider value={{ filteredProducts, setFilter, setSearch, setSortOrder }}>
      {children}
    </ProductContext.Provider>
  );
};
