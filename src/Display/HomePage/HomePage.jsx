import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard/ProductCard';
import { ShoppingCart } from '@mui/icons-material';
import ROUTES from '../../Router/RoutesModel';

export default function HomePage({ products, navigate, addToCart }) {
  return (
    <Box sx={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 8,
          color: '#333333',
          fontWeight: 'bold',
          fontFamily: 'tahoma'
        }}
      >
        המוצרים שלנו
      </Typography>

      <IconButton
        onClick={() => navigate(ROUTES.CART)}
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 20,
          backgroundColor: '#a29bfe',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: '#6c63ff',
            opacity: 1,
          },
        }}
      >
        <ShoppingCart sx={{ fontSize: '30px' }} />
      </IconButton>

      <Grid sx={{ paddingBottom: 10, gap: 3 }} container spacing={3}>
        {products.map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            rl={index}
            navigate={navigate}
            addToCart={addToCart}
          />
        ))}
      </Grid>
    </Box>
  );
}
