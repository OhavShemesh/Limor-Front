import { AddShoppingCart, ShoppingCart } from '@mui/icons-material';
import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import ROUTES from '../../Router/RoutesModel';

export default function SingleProductDisplay({ product, formatDescription, imageSrc, addToCart, navigate }) {
    return (
        <Box
            sx={{
                padding: 4,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                backgroundColor: '#f9f9f9',
                height: 'fit-content',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    minHeight: '500px',
                }}
            >
                <CardMedia
                    component="img"
                    src={imageSrc}
                    alt={product.name}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </Box>

            <Box
                sx={{
                    flex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    padding: 4,
                    alignItems: 'stretch',
                    minHeight: '500px',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Tahoma',
                        fontWeight: 'bold',
                        color: '#333',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                        marginBottom: 2,
                    }}
                >
                    {product.name}
                </Typography>

                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            direction: 'rtl',
                            fontWeight: 'bold',
                            marginBottom: 2,
                            color: '#555',
                        }}
                    >
                        תיאור מוצר:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            direction: 'rtl',
                            lineHeight: 1.6,
                            color: '#666',
                            whiteSpace: 'pre-wrap',
                            overflowY: 'auto',
                            maxHeight: '200px',
                        }}
                        dangerouslySetInnerHTML={{ __html: formatDescription(product.description) }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #ddd',
                        paddingTop: 2,
                        gap: 4,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                direction: 'rtl',
                                fontWeight: 'bold',
                                color: '#555',
                                marginBottom: 1,
                            }}
                        >
                            מחיר מוצר:
                        </Typography>
                        <Typography
                            sx={{
                                direction: 'rtl',
                                fontSize: '1.5rem',
                                color: '#333',
                                fontWeight: 'bold',
                            }}
                        >
                            {product.price}₪
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                direction: 'rtl',
                                fontWeight: 'bold',
                                color: '#555',
                                marginBottom: 1,
                            }}
                        >
                            כמות במלאי:
                        </Typography>
                        <Typography
                            sx={{
                                direction: 'rtl',
                                fontSize: '1.5rem',
                                color: product.inStock > 0 ? '#28a745' : '#d32f2f',
                                fontWeight: 'bold',
                            }}
                        >
                            {product.inStock > 0 ? `${product.inStock}` : 'אזל מהמלאי'}
                        </Typography>

                    </Box>

                </Box>
                <IconButton
                    onClick={() => addToCart(product)}
                    sx={{
                        display: 'flex',
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


            </Box>
        </Box>
    );
}
