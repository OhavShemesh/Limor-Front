import { Undo } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'

export default function EditSingleProduct({ product, navigate, handleChange, handleSubmit }) {
    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    fontFamily: 'tahoma',
                    color: 'white',
                    textAlign: 'center',
                    paddingBottom: 2,
                    paddingTop: 2,
                    backgroundColor: '#1e1e1e',
                }}
            >
                עריכת מוצר
            </Typography>
            <IconButton onClick={() => navigate(-1)} sx={{ position: "absolute", bottom: 40, right: 10, display: "flex", gap: 1, border: "1px solid white", borderRadius: "20px" }}>
                <Typography color='white' variant='body1'>חזרה</Typography>
                <Undo sx={{ color: "white" }} />
            </IconButton>


            <Box
                sx={{
                    backgroundColor: '#1e1e1e',
                    padding: 3,
                    paddingBottom: '80px',
                    minHeight: "85vh",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >

                <Box sx={{ width: "50%", borderRight: "1px solid white", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <Typography variant='h4' sx={{ fontFamily: "tahoma", color: "white" }}>מוצר ישן</Typography>
                    <Card
                        sx={{
                            width: "300px",
                            height: "500px",
                            borderRadius: "40px",
                            boxShadow: "0px 0px 24px rgba(255, 255, 255, 0.3)"
                        }}
                    >
                        <CardMedia component={"img"} src={product.imageUrl} alt={product.name} sx={{ height: "200px" }} />
                        <CardHeader title={product.name} subheader={product.description} sx={{ textAlign: "right", direction: "rtl" }} />
                    </Card>
                </Box>
                <Box sx={{ width: "48%", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <Typography variant='h4' sx={{ fontFamily: "tahoma", color: "white" }}>מוצר חדש</Typography>
                    <Card
                        sx={{
                            width: "300px",
                            height: "auto", // Adjust height based on content
                            borderRadius: "40px",
                            boxShadow: "0px 0px 24px rgba(255, 255, 255, 0.3)",
                            padding: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundColor: '#2C2C2C', // Soft background for card
                            color: 'white', // White text for readability
                        }}
                    >
                        {/* Image URL Section */}
                        <TextField
                            label="כתובת תמונה"
                            name='imageUrl'
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            inputProps={{ style: { textAlign: "right", color: "white", direction: "rtl" } }}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: '#3C3C3C', // Lighter background for inputs
                                borderRadius: "20px", // Rounded inputs
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "20px",
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white', // Label color
                                }
                            }}
                        />

                        {/* Name Section */}
                        <TextField
                            label="שם מוצר"
                            variant="outlined"
                            name='name'
                            onChange={handleChange}
                            fullWidth
                            inputProps={{ style: { textAlign: "right", color: "white", direction: "rtl" } }}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: '#3C3C3C',
                                borderRadius: "20px",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "20px",
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                }
                            }}
                        />

                        {/* Description Section */}
                        <TextField
                            label="תיאור מוצר"
                            variant="outlined"
                            name='description'
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                            inputProps={{ style: { textAlign: "right", color: "white", direction: "rtl" } }}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: '#3C3C3C',
                                borderRadius: "20px",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "20px",
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                }
                            }}
                        />

                        {/* Price Section */}
                        <TextField
                            label="מחיר"
                            variant="outlined"
                            name='price'
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            inputProps={{ style: { textAlign: "right", color: "white", direction: "rtl" } }}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: '#3C3C3C',
                                borderRadius: "20px",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "20px",
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                }
                            }}
                        />

                        {/* In Stock Section */}
                        <TextField
                            label="כמות במלאי"
                            variant="outlined"
                            name='inStock'
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            inputProps={{ style: { textAlign: "right", color: "white", direction: "rtl" } }}
                            sx={{
                                marginBottom: 2,
                                backgroundColor: '#3C3C3C',
                                borderRadius: "20px",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: "20px",
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                }
                            }}
                        />
                        <Button onClick={() => handleSubmit()} variant='contained' sx={{ backgroundColor: "grey", width: "50%", margin: "auto", borderRadius: "30px", fontSize: "18px", fontFamily: "tahoma" }}>
                            שמור
                        </Button>
                    </Card>
                </Box>
            </Box>

        </>
    )
}
