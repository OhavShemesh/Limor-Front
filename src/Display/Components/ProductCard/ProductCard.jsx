import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  IconButton,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import axios from 'axios';

export default function ProductCard({ product, rl }) {
  const [imageSrc, setImageSrc] = useState()
  const fetchImage = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      const response = await axios.get(`${baseUrl}/get-image-by-id/${product.imageUrl}`);
      setImageSrc(response.data.image)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <Container sx={{ paddingTop: '3vh', position: 'relative' }}>
      <Card sx={{ borderRadius: '20px' }}>
        <CardActionArea
          sx={{
            width: '100%',
            height: '30vh',
            display: 'flex',
            flexDirection: rl % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'flex-start',
          }}
        >
          <CardMedia
            sx={{ width: '30%', height: '29vh', borderRadius: '40px' }}
            component="img"
            src={imageSrc}
            alt={product.name || 'Product Image'}
          />
          <CardContent
            sx={{
              width: '70%',
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', direction: 'rtl' }}
            >
              {product.name}
            </Typography>
            <Typography sx={{ direction: 'rtl' }}>{product.description}</Typography>
            <Typography>₪ {product.price}</Typography>
            <Typography sx={{ direction: 'rtl' }}>במלאי: {product.inStock}</Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 20,
            right: rl % 2 === 0 ? 50 : 'none',
            left: rl % 2 === 1 ? 50 : 'none',
            alignItems: 'center',
            gap: 1,
            borderRadius: '20px',
          }}
        >
          <Typography sx={{ fontFamily: 'tahoma', color: 'black' }}>
            הוסף לעגלה
          </Typography>
          <AddShoppingCart sx={{ fontSize: '32px', color: 'black' }} />
        </IconButton>
      </Card>
    </Container>
  );
}
