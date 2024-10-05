import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return product ? (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetails;
