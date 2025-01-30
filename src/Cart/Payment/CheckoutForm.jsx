import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import { useCart } from "../Provider/CartProvider";
import axios from "axios";

export default function CheckoutForm({ onPaymentSuccess }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const { finalAmount } = useCart();
    const [paypalLoaded, setPaypalLoaded] = useState(false);

    const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

    // Load PayPal SDK
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=ILS`;
        script.async = true;
        script.onload = () => {
            console.log("PayPal SDK loaded successfully");
            setPaypalLoaded(true);
        };
        script.onerror = () => {
            console.error("PayPal SDK failed to load");
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            setPaypalLoaded(false);
        };
    }, [PAYPAL_CLIENT_ID]);

    // Handle PayPal payment
    const handlePayPalPayment = async (details) => {
        setIsProcessing(true);

        try {
            const { data } = await axios.post(`${BACKEND_URL}/payment/create-paypal-payment`, {
                paymentId: details.id,
                amount: finalAmount,
            });

            console.log("PayPal Payment Response:", data);

            if (data.success) {
                onPaymentSuccess();
            } else {
                alert("Payment failed: " + (data.message || "Unknown error"));
            }
        } catch (err) {
            console.error("PayPal Payment Error:", err);
            alert("Payment failed. Please try again.");
        }

        setIsProcessing(false);
    };

    useEffect(() => {
        if (paypalLoaded && window.paypal) {
            console.log("Rendering PayPal button...");
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: { value: finalAmount.toString() },
                            },
                        ],
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then((details) => {
                        handlePayPalPayment(details);
                    });
                },
                onError: (err) => {
                    console.error("PayPal error:", err);
                    alert("An error occurred during payment");
                },
                style: {
                    size: "responsive",
                    shape: "pill",
                    color: "blue",
                },
            }).render("#paypal-button-container");
        }
    }, [paypalLoaded, finalAmount]);

    return (
        <Box sx={{ maxWidth: 500, margin: "auto", padding: 4 }}>
            <Paper sx={{ padding: 3, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: "center", direction: "rtl" }}>
                    שלם עם PayPal
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "600", direction: "rtl" }}>
                        סכום סופי:
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#d32f2f" }}>₪{finalAmount}</Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    {paypalLoaded ? (
                        <div id="paypal-button-container"></div>
                    ) : (
                        <CircularProgress />
                    )}
                </Box>

                <Box sx={{ mt: 3 }}>
                    {paypalLoaded && (
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isProcessing}
                            sx={{
                                width: "100%",
                                padding: "12px",
                                borderRadius: "5px",
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#1976d2",
                                "&:hover": {
                                    backgroundColor: "#1565c0",
                                },
                            }}
                        >
                            {isProcessing ? (
                                <>
                                    <CircularProgress size={24} sx={{ mr: 2 }} />
                                    מעבד את התשלום...
                                </>
                            ) : (
                                `שלם ₪${finalAmount}`
                            )}
                        </Button>
                    )}
                </Box>
            </Paper>
        </Box>
    );
}
