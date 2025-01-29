import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard/ProductCard';
import { Delete } from '@mui/icons-material';

export default function HomePage({ products, deleteAllImagesFromDB, navigate, addToCart, cart }) {
  return (
    <Box sx={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <IconButton onClick={() => deleteAllImagesFromDB()} sx={{ position: "absolute", left: 0, top: 50 }}>
        <Delete sx={{ fontSize: "36px" }} />
      </IconButton>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: '#333333',
          fontWeight: 'bold',
          fontFamily: 'tahoma'
        }}
      >
        המוצרים שלנו
      </Typography>

      <Grid sx={{ paddingBottom: 5 }} container spacing={3}>
        {products.map((product, index) => (
          <ProductCard product={product} rl={index} navigate={navigate} cart={cart} addToCart={addToCart} />
        ))}
      </Grid>
    </Box>
  );
}
