import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
