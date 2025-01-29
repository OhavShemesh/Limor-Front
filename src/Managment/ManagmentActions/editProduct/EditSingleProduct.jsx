import { Undo } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';

import React from 'react'

export default function EditSingleProduct({ product, navigate, handleChange, handleSubmit, imageSrc, preview, handleFileChange }) {
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
                            height: "fit-content",
                            borderRadius: "40px",
                            boxShadow: "0px 0px 24px rgba(255, 255, 255, 0.3)",
                            paddingBottom: 3
                        }}
                    >
                        <Box sx={{ position: 'relative', height: '200px' }}>
                            <CardMedia
                                component="img"
                                src={imageSrc}
                                alt={product?.name}
                                sx={{
                                    height: '200px',
                                    opacity: 1,  
                                    '&:hover': {
                                        opacity: 1, 
                                    },
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    position: 'absolute',
                                    bottom: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, 50%)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                                    opacity: 0.6, 
                                    fontSize: "1rem"
                                }}
                            >
                                תמונה
                            </Typography>
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, paddingTop: 2 }}>
                            <Typography sx={{ textAlign: "right", direction: "rtl", width: "90%", border: "1px solid", borderRadius: "20px", padding: "5px 10px 5px 10px", fontSize: "1.2rem" }} >{`שם מוצר: ${product?.name}`}</Typography>
                            <Typography sx={{ textAlign: "right", direction: "rtl", width: "90%", border: "1px solid", borderRadius: "20px", padding: "5px 10px 5px 10px", fontSize: "1.2rem" }} >{`תיאור מוצר: ${product?.description}`}</Typography>
                            <Typography sx={{ textAlign: "right", direction: "rtl", width: "90%", border: "1px solid", borderRadius: "20px", padding: "5px 10px 5px 10px", fontSize: "1.2rem" }} >{`מחיר מוצר: ${product?.price}`}</Typography>
                            <Typography sx={{ textAlign: "right", direction: "rtl", width: "90%", border: "1px solid", borderRadius: "20px", padding: "5px 10px 5px 10px", fontSize: "1.2rem" }} >{`מלאי מוצר: ${product?.inStock}`}</Typography>
                        </Box>
                    </Card>
                </Box>
                <Box sx={{ width: "48%", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                    <Typography variant='h4' sx={{ fontFamily: "tahoma", color: "white" }}>מוצר חדש</Typography>
                    <Typography sx={{
                        fontFamily: 'tahoma',
                        color: 'white',
                        textAlign: 'center',
                        marginTop: -4,
                        backgroundColor: '#1e1e1e',
                    }} variant='body1'>יש למלא את כל הפרטים</Typography>

                    <Card
                        sx={{
                            width: "300px",
                            height: "auto",
                            borderRadius: "40px",
                            boxShadow: "0px 0px 24px rgba(255, 255, 255, 0.3)",
                            padding: 3,
                            gap: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundColor: '#2C2C2C',
                            color: 'white', 
                        }}
                    >
                        {/* Image URL Section */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                padding: 2,
                                border: '2px dashed #3a3a3a',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                '&:hover': { borderColor: '#444444' },
                                '&:active': { borderColor: '#ffffff' },
                                width: '100%',
                                pointerEvents: preview ? "none" : "auto"

                            }}
                            onClick={() => document.getElementById('image-upload-input').click()}
                        >
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '8px',
                                        objectFit: 'cover',
                                    }}
                                />
                            ) : (
                                <UploadFileIcon sx={{ fontSize: '48px', color: '#aaaaaa' }} />
                            )}
                            <input
                                id="image-upload-input"
                                name="imageUrl"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </Box>
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
                        <Button onClick={() => handleSubmit(product._id)} variant='contained' sx={{ backgroundColor: "grey", width: "50%", margin: "auto", borderRadius: "30px", fontSize: "18px", fontFamily: "tahoma" }}>
                            שמור
                        </Button>
                    </Card>
                </Box>
            </Box>

        </>
    )
}
