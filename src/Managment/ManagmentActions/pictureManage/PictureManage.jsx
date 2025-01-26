import { Delete } from '@mui/icons-material';
import { Box, Card, CardHeader, CardMedia, IconButton } from '@mui/material'
import { height } from '@mui/system';
import axios from 'axios';
import React from 'react'

export default function PictureManage({ allImages = [], deleteImageById, convertToBase64 }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
                paddingY: 5,
            }}
        >
            {allImages?.map((image) => {
                // Convert the image data if it's not already in Base64 format
                const base64ImageData =
                    typeof image.imageData.data === "string"
                        ? image.imageData.data
                        : convertToBase64(image.imageData.data);

                return (
                    <Card
                        sx={{
                            width: "300px",
                            height: "500px",
                            border: "1px solid",
                            borderRadius: "20px",
                        }}
                        key={image._id}
                    >
                        <CardHeader title={image.imageName} />
                        <CardMedia
                            sx={{ height: "50%" }}
                            component="img"
                            src={`data:${image.contentType};base64,${base64ImageData}`}
                            alt={image.imageName}
                        />
                        <Box sx={{ height: "50%", border: "1px solid", width: "100%" }}>
                            <IconButton onClick={() => { deleteImageById(image._id) }}>
                                <Delete />
                            </IconButton>
                        </Box>
                    </Card>
                );
            })}
        </Box >
    )
}
