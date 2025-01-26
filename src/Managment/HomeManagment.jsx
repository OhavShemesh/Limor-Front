import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import ROUTES from '../Router/RoutesModel';

export default function HomeManagment({ navigate }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100vh',
                backgroundColor: '#1e1e1e',
                padding: 3
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    marginBottom: 4,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    letterSpacing: '0.1em',
                    alignSelf: 'center'
                }}
            >
                Management Page
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                    maxWidth: 360,
                    backgroundColor: '#2a2a2a',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.ADD_PRODUCT)}
                >
                    הוסף מוצר
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.EDIT_PRODUCT)}
                >
                    ערוך מוצר
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.DELETE_PRODUCT)}
                >
                    מחק מוצר
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.DELETE_PRODUCT)}
                >
                    ניהול הזמנות
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.STOCK_MANAGE)}
                >
                    ניהול מלאי
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        padding: 1.5,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        color: '#ffffff',
                        borderColor: '#3a3a3a',
                        '&:hover': {
                            backgroundColor: '#333333',
                            borderColor: '#444444',
                        }
                    }}
                    onClick={() => navigate(ROUTES.PICUTRE_MANAGE)}
                >
                    ניהול תמונות
                </Button>
            </Box>
        </Box>
    );
};