import { LocationOn, Mail, WhatsApp } from '@mui/icons-material'
import { Button, Container, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function ContactMe() {
    return (
        <Box>
            <Box sx={{ width: "100%", height: "15vh", backgroundColor: "#C5BAFF", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }} >
                <Typography variant='h3' sx={{ fontWeight: "bold", fontFamily: "tahoma" }}>צור קשר</Typography>
            </Box>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{
                    width: "50%", padding: "20px", display: "flex", alignItems: "center", flexWrap: "wrap", height: "fit-content", gap: 2, flexDirection: "column"
                }}>
                    <Box
                        sx={{
                            border: "1px solid",
                            width: "55%",
                            paddingY: 1,
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <IconButton>
                            <LocationOn sx={{ fontSize: "30px" }} />
                            <Typography sx={{ fontSize: "20px" }}>Petah Tiqua</Typography>
                        </IconButton>
                        <Typography sx={{ color: "rgb(0,0,0,0.6)" }}>מיקום לצורך איסוף עצמי בלבד</Typography>
                    </Box>
                    <Box
                        sx={{
                            border: "1px solid",
                            width: "55%",
                            paddingY: 1,
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 1
                        }}
                    >
                        <IconButton sx={{ display: "flex", gap: 0.5 }}>
                            <WhatsApp sx={{ fontSize: "30px" }} />
                            <Typography sx={{ fontSize: "20px" }}>054-9465762</Typography>
                        </IconButton>
                        <Typography sx={{ color: "rgb(0,0,0,0.6)", textAlign: "center", width: "90%" }}>קישור לוואטסאפ לבקשת הצעת מחיר ושאלות</Typography>
                    </Box>
                    <Box
                        sx={{
                            border: "1px solid",
                            width: "55%",
                            paddingY: 1,
                            borderRadius: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 1
                        }}
                    >
                        <IconButton sx={{ display: "flex", gap: 0.5 }}>
                            <Mail sx={{ fontSize: "30px" }} />
                            <Typography sx={{ fontSize: "20px" }}>lshemesh12@gmail.com</Typography>
                        </IconButton>
                        <Typography sx={{ color: "rgb(0,0,0,0.6)", textAlign: "center", width: "90%" }}>קישור לשליחת הודעת מייל לבקשת הצעת מחיר ושאלות</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "50%",
                        padding: "20px",
                        gap: 2,
                    }}
                >
                    <Typography sx={{ width: "98%", borderRadius: "40px", backgroundColor: "#C5BAFF", textAlign: "center", fontFamily: "tahoma", fontWeight: "bold", paddingY: 1.5, fontSize: "24px" }}>שלח הודעה</Typography>
                    <TextField
                        label="אימייל"
                        fullWidth
                        sx={{
                            width: "48%",
                            direction: "rtl",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "30px",
                                "& fieldset": {
                                    backgroundColor: "#C5BAFF",
                                    border: "none"
                                },
                                "&:hover fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                "&.Mui-focused fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                textAlign: "right",
                            },
                            "& .MuiInputLabel-root": {
                                right: "30px",
                                left: "auto",
                                transformOrigin: "top right",
                            },
                            "& .MuiInputLabel-shrink": {
                                transformOrigin: "top right",
                            },
                        }}
                    />
                    <TextField
                        label="טלפון"
                        fullWidth
                        sx={{
                            width: "48%",
                            direction: "rtl",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "30px",
                                "& fieldset": {
                                    backgroundColor: "#C5BAFF",
                                    border: "none"
                                },
                                "&:hover fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                "&.Mui-focused fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                textAlign: "right",
                            },
                            "& .MuiInputLabel-root": {
                                right: "30px",
                                left: "auto",
                                transformOrigin: "top right",
                            },
                            "& .MuiInputLabel-shrink": {
                                transformOrigin: "top right",
                            },
                        }}
                    />
                    <TextField
                        label="שם"
                        fullWidth
                        sx={{
                            width: "98%",
                            direction: "rtl",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "30px",
                                "& fieldset": {
                                    backgroundColor: "#C5BAFF",
                                    border: "none"
                                },
                                "&:hover fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                "&.Mui-focused fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                textAlign: "right",
                            },
                            "& .MuiInputLabel-root": {
                                right: "30px",
                                left: "auto",
                                transformOrigin: "top right",
                            },
                            "& .MuiInputLabel-shrink": {
                                transformOrigin: "top right",
                            },
                        }}
                    />
                    <TextField
                        label="הודעה"
                        fullWidth
                        multiline
                        rows={8}
                        sx={{
                            direction: "rtl",
                            width: "98%",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "30px",
                                "& fieldset": {
                                    backgroundColor: "#C5BAFF",
                                    border: "none",
                                },
                                "&:hover fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                "&.Mui-focused fieldset": {
                                    backgroundColor: "#C5BAFF",
                                },
                                textAlign: "right",
                            },
                            "& .MuiInputLabel-root": {
                                right: "30px",
                                left: "auto",
                                transformOrigin: "top right",
                            },
                            "& .MuiInputLabel-shrink": {
                                transformOrigin: "top right",
                            },
                        }}
                        InputProps={{
                            inputProps: {
                                style: { textAlign: "right" },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#C5BAFF",
                            fontFamily: "tahoma",
                            fontWeight: "bold",
                            color: "black",
                            borderRadius: "30px",
                            "&:hover": {
                                backgroundColor: "#A49CE6",
                            },
                        }}
                    >
                        לחץ לשליחה
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
