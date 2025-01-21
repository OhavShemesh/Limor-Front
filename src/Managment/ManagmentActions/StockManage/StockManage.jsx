import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

export default function StockManage({ navigate, allProducts, handleMouseEnter, hoveredProduct, cardPosition, handleMouseLeave, handleUpdateStock }) {
    return (
        <Box
            sx={{
                backgroundColor: "#1e1e1e",
                padding: 3,
                paddingBottom: "80px",
                minHeight: "92vh",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "tahoma",
                    color: "white",
                    textAlign: "center",
                    paddingBottom: 5,
                    paddingTop: 2,
                }}
            >
                ניהול מלאי
            </Typography>
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: "#333333",

                        }}
                    >
                        <TableCell sx={{ color: "white", textAlign: "center", width: "10%", fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>
                            הוסף מלאי
                        </TableCell>
                        <TableCell sx={{ color: "white", textAlign: "center", width: "10%", fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>
                            מלאי נוכחי
                        </TableCell>
                        <TableCell sx={{ color: "white", textAlign: "center", width: "10%", fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>
                            שם מוצר
                        </TableCell>
                        <TableCell sx={{ color: "white", textAlign: "center", width: "10%", fontWeight: "bold", textDecoration: "underline", fontSize: "20px" }}>
                            הצג
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allProducts.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#292929",
                                },
                            }}
                        >
                            <TableCell sx={{ textAlign: "center" }}>
                                <Stack direction="row" spacing={1} justifyContent="center">
                                    <Button
                                        onClick={() => handleUpdateStock(product._id)}
                                        variant="contained"
                                        size="small"
                                        sx={{
                                            backgroundColor: "#4CAF50",
                                            "&:hover": {
                                                backgroundColor: "#45A049",
                                            },
                                        }}
                                    >
                                        הוסף
                                    </Button>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        placeholder="כמות"
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: 1,
                                            width: "60px",
                                            textAlign: "center",
                                        }}
                                        inputProps={{
                                            style: { textAlign: "center" },
                                            maxLength: 3,
                                        }}
                                    />
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: "white", textAlign: "center" }}>
                                {product.inStock}
                            </TableCell>
                            <TableCell sx={{ color: "white", textAlign: "center" }}>
                                {product.name}
                            </TableCell>
                            <TableCell
                                sx={{ color: "white", textAlign: "center" }}
                                onMouseEnter={(event) => handleMouseEnter(product, event)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <IconButton>
                                    <Visibility sx={{ color: "white" }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {hoveredProduct && (
                <Box
                    sx={{
                        position: "absolute",
                        top: `${cardPosition.top + 20}px`,
                        left: `${cardPosition.left - 570}px`,
                        zIndex: 10,
                        pointerEvents: "none",
                    }}
                >
                    <Card sx={{ width: "300px", borderRadius: "16px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={hoveredProduct.imageUrl}
                            alt={hoveredProduct.name}
                        />
                        <CardContent>
                            <Typography
                                sx={{ textAlign: "right", direction: "rtl" }}
                                variant="h5"
                                component="div"
                            >
                                {hoveredProduct.name}
                            </Typography>
                            <Typography
                                sx={{ textAlign: "right", direction: "rtl" }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {hoveredProduct.description}
                            </Typography>
                            <Typography
                                sx={{ textAlign: "right", direction: "rtl" }}
                                variant="body2"
                                color="text.secondary"
                            >
                                {hoveredProduct.price} ₪
                            </Typography>
                            <Typography
                                sx={{ textAlign: "right", direction: "rtl" }}
                                variant="body2"
                                color="text.secondary"
                            >
                                במלאי: {hoveredProduct.inStock}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </Box>
    );
}
