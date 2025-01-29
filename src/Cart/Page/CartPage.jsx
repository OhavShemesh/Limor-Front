import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ROUTES from '../../Router/RoutesModel';

export default function CartPage({ cart, removeFromCart, clearCart, imageSources, navigate }) {
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isPromoCodeVisible, setIsPromoCodeVisible] = useState(false);

    function formatDescription(description) {
        let formatted = description;

        // Replace semicolons with line breaks
        formatted = formatted.replace(/;/g, "<br />");

        // Replace **text** with bold text
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        // Replace __text__ with underlined text
        formatted = formatted.replace(/__(.*?)__/g, "<u>$1</u>");

        // Replace * at the start of a line with a bullet point
        formatted = formatted.replace(/^\* (.*)/gm, "• $1");

        return formatted;
    }

    // Handle Promo Code Submission
    const handlePromoCodeApply = () => {
        if (promoCode === 'PROMO10') { // Assuming the promo code is "PROMO10" for a 10% discount
            setDiscount(totalAmount * 0.1);
        } else {
            setDiscount(0);
            alert("קוד קידום לא תקף"); // Promo code not valid
        }
        // Hide the promo code input field after applying
        setIsPromoCodeVisible(false);
    };

    // Calculate the total price, total items, and total discount
    const totalItems = cart.length;
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    const finalAmount = totalAmount - discount;

    return (
        <Box sx={{ maxWidth: 900, margin: 'auto', padding: 3, boxShadow: 2, borderRadius: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: '#333' }}>
                עגלת קניות
            </Typography>

            {cart.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: 'center', color: '#888', display: "flex", justifyContent: "center", gap: 0.5, alignItems: "center", direction: "rtl" }}>
                    עגלת הקניות שלך ריקה.
                    <Button
                        onClick={() => navigate(ROUTES.HOME)}
                        sx={{
                            textTransform: 'none',
                            color: "rgba(128, 0, 128, 0.7)",
                            padding: 0,
                            fontSize: 'inherit',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        עבור לדף הקניות!
                    </Button>
                </Typography>
            ) : (
                cart.map((item) => (
                    <Card
                        key={item._id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            p: 2,
                            boxShadow: 1,
                            bgcolor: '#fff',
                            borderRadius: 2,
                            '&:hover': {
                                boxShadow: 3,
                            },
                            flexDirection: "row-reverse"
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: 120,
                                height: 120,
                                borderRadius: 2,
                                mr: 2,
                                objectFit: 'cover',
                            }}
                            image={imageSources[item._id] || ''}
                            alt={item.name}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ color: '#333', direction: "rtl", fontWeight: "bold" }}>
                                {item.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 1,
                                    color: '#777',
                                    direction: "rtl",
                                    maxHeight: '150px', // Set a max height for the description container
                                    overflowY: 'auto',  // Enable vertical scrolling
                                    wordWrap: 'break-word', // Prevent word breaking
                                }}
                                dangerouslySetInnerHTML={{ __html: formatDescription(item.description) }}
                            />

                            <Typography variant="h6" sx={{ fontWeight: '600', color: '#d32f2f' }}>
                                ${item.price}
                            </Typography>
                        </CardContent>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => removeFromCart(item._id)}
                            sx={{
                                fontSize: '0.9rem',
                                padding: '6px 12px',
                                borderRadius: 1,
                                borderColor: '#d32f2f',
                                color: '#d32f2f',
                                '&:hover': {
                                    borderColor: '#c62828',
                                    color: '#c62828',
                                },
                            }}
                        >
                            הסר
                        </Button>
                    </Card>
                ))
            )}

            {/* Cart Summary Section */}
            {cart.length > 0 && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    mt: 3,
                }}>
                    <Typography variant="h6" sx={{ fontWeight: '600', color: '#333', direction: "rtl" }}>סיכום עגלה</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: "row-reverse" }}>
                        <Typography variant="body1" sx={{ color: '#777' }}>סך כל הסכום</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600', color: '#333' }}>{totalItems}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, flexDirection: "row-reverse" }}>
                        <Typography variant="body1" sx={{ color: '#777' }}>סך כל המחיר</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600', color: '#333' }}>${totalAmount.toFixed(2)}</Typography>
                    </Box>

                    {/* Promo Code Toggle Button */}
                    {!isPromoCodeVisible && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: "row-reverse" }}>
                            <Button
                                onClick={() => setIsPromoCodeVisible(true)}
                                variant="outlined"
                                color="primary"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    padding: '6px 12px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: '#cce7ff',
                                    },
                                }}
                            >
                                הכנס קוד קידום
                            </Button>
                        </Box>
                    )}

                    {/* Promo Code Input Section */}
                    {isPromoCodeVisible && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: "row-reverse" }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "row-reverse", gap: 1 }}>
                                <TextField
                                    variant="outlined"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    sx={{
                                        width: 120,
                                        '& .MuiInputBase-root': {
                                            fontSize: '0.9rem',
                                            textAlign: 'right', // Align input text to the right
                                        },
                                        '& .MuiInputLabel-root': {
                                            textAlign: 'right', // Align label text to the right
                                        },
                                    }}
                                    size="small"
                                    label="הכנס קוד"
                                    InputLabelProps={{
                                        style: {
                                            textAlign: 'right', // Label aligned to right
                                        },
                                    }}
                                    InputProps={{
                                        style: {
                                            textAlign: 'right', // Input aligned to right
                                        },
                                    }}
                                    dir="rtl" // Ensures entire TextField is in RTL
                                />
                                <Button
                                    onClick={handlePromoCodeApply}
                                    variant="outlined"
                                    sx={{
                                        marginLeft: 1,
                                        fontSize: '0.8rem',
                                        padding: '6px 12px',
                                        borderRadius: 1,
                                        color: '#388e3c',
                                        borderColor: '#388e3c',
                                        '&:hover': {
                                            backgroundColor: 'rgba(56, 142, 60, 0.1)',
                                        },
                                    }}
                                >
                                    החל קוד
                                </Button>
                            </Box>
                        </Box>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, flexDirection: "row-reverse" }}>
                        <Typography variant="body1" sx={{ color: '#777' }}>הנחה</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600', color: '#388e3c' }}>-${discount.toFixed(2)}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, flexDirection: "row-reverse" }}>
                        <Typography variant="body1" sx={{ color: '#777' }}>סכום סופי</Typography>
                        <Typography variant="h6" sx={{ fontWeight: '600', color: '#d32f2f' }}>${finalAmount.toFixed(2)}</Typography>
                    </Box>
                </Box>
            )}

            {/* Action Buttons */}
            {cart.length > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 10 }}>
                    {/* Clear Cart Button as IconButton with text */}
                    <IconButton onClick={clearCart} sx={{ color: '#d32f2f' }}>
                        <DeleteIcon />
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>נקה את העגלה</Typography>
                    </IconButton>

                    {/* Proceed to Checkout Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            fontSize: '1rem',
                            padding: '10px 20px',
                            borderRadius: 1,
                            textTransform: 'none',
                        }}
                        onClick={() => navigate(ROUTES.CHECKOUT)}
                    >
                        להמשך לתשלום
                    </Button>
                </Box>
            )}
        </Box>
    );
}
