import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard/ProductCard';

export default function HomePage({ products }) {
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
          <ProductCard product={product} rl={index} />
        ))}
      </Grid>
    </Box>
  );
}
