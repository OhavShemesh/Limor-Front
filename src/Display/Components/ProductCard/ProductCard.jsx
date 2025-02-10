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
import ROUTES from '../../../Router/RoutesModel';

export default function ProductCard({ product, rl, navigate, addToCart }) {
  const [imageSrc, setImageSrc] = useState();

  const fetchImage = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.get(`${baseUrl}/get-image-by-id/${product.imageUrl}`);
      setImageSrc(response.data.image);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  function formatDescription(description) {
    let formatted = description;

    formatted = formatted.replace(/;/g, "<br />");

    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    formatted = formatted.replace(/__(.*?)__/g, "<u>$1</u>");

    formatted = formatted.replace(/^\* (.*)/gm, "• $1");

    return formatted;
  }

  return (
    <Container sx={{ paddingTop: '2vh', position: 'relative' }}>
      <Card
        sx={{
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          height: '350px',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <CardActionArea
          onClick={() => navigate(ROUTES.SINGLE_PRODUCT + `/${product._id}`)}
          sx={{
            display: 'flex',
            flexDirection: rl % 2 === 0 ? 'row' : 'row-reverse',
            gap: 2,
            alignItems: 'stretch',
            height: '100%',
          }}
        >
          <CardMedia
            sx={{
              width: '40%',
              height: '100%',
              borderRadius: '12px',
              objectFit: 'cover',
            }}
            component="img"
            src={imageSrc}
            alt={product.name || 'Product Image'}
          />
          <CardContent
            sx={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 1,
              padding: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', direction: 'rtl' }}>
              {product.name}
            </Typography>
            <Typography
              sx={{
                direction: 'rtl',
                fontSize: '0.9rem',
                overflowY: 'auto',
                textOverflow: 'ellipsis',
                maxHeight: '10rem',
              }}
              dangerouslySetInnerHTML={{ __html: formatDescription(product.description) }}
            />
            <Typography sx={{ direction: 'rtl', fontWeight: 'bold' }}>
              ₪ {product.price}
            </Typography>
            <Typography sx={{ direction: 'rtl', color: (product.inStock > 0 ? '#28a745' : '#d32f2f') }}>
              {product.inStock > 0 ? `במלאי: ${product.inStock} יחידות` : 'אזל מהמלאי'}
            </Typography>
            <br />
          </CardContent>
        </CardActionArea>

        <IconButton
          onClick={() => addToCart(product)}
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 10,
            right: rl % 2 === 0 ? 40 : 'none',
            left: rl % 2 === 1 ? 40 : 'none',
            alignItems: 'center',
            gap: 0.5,
            borderRadius: '12px',
            backgroundColor: '#f1f1f1',
            padding: '8px',
          }}
        >
          <Typography sx={{ fontFamily: 'tahoma', color: 'black', fontSize: '0.9rem' }}>
            הוסף לעגלה
          </Typography>
          <AddShoppingCart sx={{ fontSize: '24px', color: 'black' }} />
        </IconButton>
      </Card>
    </Container>
  );
}
