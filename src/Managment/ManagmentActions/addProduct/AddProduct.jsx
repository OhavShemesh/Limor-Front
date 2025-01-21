import { Undo } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import ROUTES from '../../../Router/RoutesModel';

export default function AddProduct({ navigate, handleChange, handleSubmit }) {
    return (
        <>
            <IconButton onClick={() => navigate(ROUTES.ADMIN)} sx={{ position: "absolute", bottom: 40, right: 10, display: "flex", gap: 1, border: "1px solid white", borderRadius: "20px" }}>
                <Typography color='white' variant='body1'>חזרה</Typography>
                <Undo sx={{ color: "white" }} />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'start',
                    height: '92vh',
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
                    הוסף מוצר
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
                    <TextField
                        label="שם מוצר"
                        variant="outlined"
                        name='name'
                        fullWidth
                        onChange={handleChange}
                        InputLabelProps={{ style: { color: '#aaaaaa', fontFamily: "tahoma" } }}
                        sx={{
                            input: { color: '#ffffff' },
                            label: { color: '#aaaaaa' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#444444'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff'
                                }
                            }
                        }}
                    />
                    <TextField
                        label="תיאור מוצר"
                        variant="outlined"
                        name="description"
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={4}
                        InputLabelProps={{
                            style: { color: '#aaaaaa' },
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                color: '#ffffff', // Default input color
                            },
                            '& .MuiInputBase-inputMultiline': {
                                color: '#ffffff', // Target the textarea in multiline mode
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#444444',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="מחיר"
                        variant="outlined"
                        name='price'
                        onChange={handleChange}
                        type='number'
                        fullWidth
                        InputLabelProps={{ style: { color: '#aaaaaa' } }}
                        sx={{
                            input: { color: '#ffffff' },
                            label: { color: '#aaaaaa' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#444444'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff'
                                }
                            }
                        }}
                    />
                    <TextField
                        label="תמונה"
                        variant="outlined"
                        name='imageUrl'
                        onChange={handleChange}
                        fullWidth
                        InputLabelProps={{ style: { color: '#aaaaaa' } }}
                        sx={{
                            input: { color: '#ffffff' },
                            label: { color: '#aaaaaa' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#444444'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff'
                                }
                            }
                        }}
                    />
                    <TextField
                        label="כמה במלאי"
                        type="number"
                        name='inStock'
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: '#aaaaaa' } }}
                        sx={{
                            input: { color: '#ffffff' },
                            label: { color: '#aaaaaa' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3a3a3a'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#444444'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff'
                                }
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={() => handleSubmit()}
                        sx={{
                            padding: 1.5,
                            fontSize: '0.9rem',
                            textTransform: 'none',
                            backgroundColor: '#3a3a3a',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#444444'
                            }
                        }}
                    >
                        Check
                    </Button>
                </Box>
            </Box>

        </>
    );
}
