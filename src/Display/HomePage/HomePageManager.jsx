import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Cart/Provider/CartProvider';

export default function HomePageManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const { cart, addToCart } = useCart()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.get(`${baseUrl}/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const deleteAllImagesFromDB = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.delete(`${baseUrl}/delete-all-images`)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    const fetchEnvInfo = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${baseUrl}/env-info`);
        const envInfo = await response.json();
        console.log(`🟢 Environment Info:`, envInfo);
      } catch (error) {
        console.error("🔴 Failed to fetch environment info:", error);
      }
    };

    fetchEnvInfo();
  }, []);




  if (loading) return <Box sx={{ textAlign: 'center', mt: 4 }}>Loading...</Box>;
  if (error) return <Box sx={{ textAlign: 'center', mt: 4, color: 'red' }}>{error}</Box>;

  return <HomePage products={products} deleteAllImagesFromDB={deleteAllImagesFromDB} navigate={navigate} cart={cart} addToCart={addToCart} />;
}
