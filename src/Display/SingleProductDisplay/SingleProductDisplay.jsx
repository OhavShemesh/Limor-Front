import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';

export default function SingleProductDisplay({ product, formatDescription, imageSrc }) {
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
            {/* Image Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch', // Stretch image to match the height of the other section
                    minHeight: '500px', // Ensure a minimum height
                }}
            >
                <CardMedia
                    component="img"
                    src={imageSrc}
                    alt={product.name}
                    sx={{
                        width: '100%', // Make image fill the container width
                        height: '100%', // Make the image stretch to the full height of the container
                        objectFit: 'cover', // Maintain aspect ratio while covering the container
                        borderRadius: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </Box>

            {/* Details Section */}
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
                    alignItems: 'stretch', // Ensure it stretches to the height of the image
                    minHeight: '500px', // Ensure the details section has at least the same height
                }}
            >
                {/* Product Name */}
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

                {/* Description Section */}
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

                {/* Price and Stock Section */}
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
                    {/* Price */}
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

                    {/* Stock */}
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
            </Box>
        </Box>
    );
}
