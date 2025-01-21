import { Box, Card, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import ROUTES from '../../../Router/RoutesModel'
import { Undo } from '@mui/icons-material'

export default function EditProduct({ allProducts, navigate }) {
    return (
        <Box
            sx={{
                backgroundColor: '#1e1e1e',
                padding: 3,
                paddingBottom: '80px',
                minHeight: "92vh"
            }}
        >
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
                בחר מוצר לערוך
            </Typography>
            <IconButton onClick={() => navigate(ROUTES.ADMIN)} sx={{ position: "absolute", bottom: 40, right: 10, display: "flex", gap: 1, border: "1px solid white", borderRadius: "20px" }}>
                <Typography color='white' variant='body1'>חזרה</Typography>
                <Undo sx={{ color: "white" }} />
            </IconButton>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: "row-reverse",
                flexWrap: 'wrap',
                gap: 3,
            }}>
                {allProducts.map((product) => (
                    <Card onClick={() => { navigate(ROUTES.EDIT_SINGLE_PRODUCT + "/" + product._id) }} key={product._id} sx={{ width: "300px", height: "500px", borderRadius: "40px", border: '1px solid white', cursor: "pointer" }}>
                        <CardMedia component={"img"} src={product.imageUrl} alt={product.name} height={"200px"} />
                        <CardHeader sx={{ textAlign: "right", direction: "rtl" }} title={product.name} subheader={product.description} />
                    </Card>
                ))}
            </Box>
        </Box>
    )
}
