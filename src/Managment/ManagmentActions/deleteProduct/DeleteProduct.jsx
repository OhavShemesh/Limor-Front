import { Undo } from '@mui/icons-material';
import { Box, Card, CardHeader, CardMedia, Typography, Button, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ROUTES from '../../../Router/RoutesModel';

export default function DeleteProduct({ allProducts, handleDeleteProduct, handleFlip, flippedCards,navigate }) {

    return (
        <Box
            sx={{
                backgroundColor: '#1e1e1e',
                padding: 3,
                paddingBottom: '80px',
                minHeight: "92vh"
            }}
        >
            <IconButton onClick={() => navigate(ROUTES.ADMIN)} sx={{ position: "absolute", bottom: 40, right: 10, display: "flex", gap: 1, border: "1px solid white", borderRadius: "20px" }}>
                <Typography color='white' variant='body1'>חזרה</Typography>
                <Undo sx={{ color: "white" }} />
            </IconButton>

            <Typography
                variant="h3"
                sx={{
                    fontFamily: 'tahoma',
                    color: 'white',
                    textAlign: 'center',
                    paddingBottom: 5,
                    paddingTop: 2,
                }}
            >
                מחיקת מוצר
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: "row-reverse",
                    flexWrap: 'wrap',
                    gap: 3,
                }}
            >
                {allProducts.map((product) => (
                    <Box
                        key={product._id}
                        sx={{
                            perspective: '1000px',
                            width: '300px',
                            height: '500px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.6s',
                                transform: flippedCards[product._id]
                                    ? 'rotateY(180deg)'
                                    : 'rotateY(0deg)',
                                position: 'relative',
                            }}
                        >
                            {/* Front Side */}
                            <Card
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    backfaceVisibility: 'hidden',
                                    border: '1px solid white',
                                    borderRadius: '40px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleFlip(product._id)}
                            >
                                <CardMedia
                                    height="200px"
                                    component="img"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                                <CardHeader
                                    sx={{ textAlign: 'right', direction: 'rtl' }}
                                    title={product.name}
                                    subheader={product.description}
                                />
                            </Card>

                            {/* Back Side */}
                            <Card
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    backgroundColor: '#1e1e1e',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '40px',
                                    border: '1px solid white',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        marginBottom: 3,
                                        textAlign: 'center',
                                        direction: "rtl"
                                    }}
                                >
                                    האם אתה בטוח שתרצה למחוק את מוצר זה?
                                </Typography>
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDeleteProduct(product._id)}
                                        sx={{ marginRight: 2 }}
                                    >
                                        כן
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleFlip(product._id)}
                                    >
                                        לא
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
