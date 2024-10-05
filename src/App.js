import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { ProductProvider } from './context/ProductContext';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="app-container">
        <h1>Product Dashboard</h1>
        <SearchBar />
        <CategoryFilter />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
