import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import HomePage from './HomePage';

export default function HomePageManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  if (loading) return <Box sx={{ textAlign: 'center', mt: 4 }}>Loading...</Box>;
  if (error) return <Box sx={{ textAlign: 'center', mt: 4, color: 'red' }}>{error}</Box>;

  return <HomePage products={products} />;
}
