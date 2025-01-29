import React, { useEffect, useState } from 'react'
import CartPage from './CartPage'
import { useCart } from '../Provider/CartProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CartPageManager() {
    const { cart, removeFromCart, clearCart } = useCart();
    const [imageSources, setImageSources] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    const fetchImage = async (imageId) => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.get(`${baseUrl}/get-image-by-id/${imageId}`);
            return response.data.image; // Return the base64 image
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            try {
                const sources = {};
                for (const cartItem of cart) {

                    sources[cartItem._id] = await fetchImage(cartItem.imageUrl);
                }
                setImageSources(sources);
            } catch (err) {
                console.error("Error loading images:", err);
            } finally {
                setIsLoading(false); // Ensure loading is false after images are processed
            }
        };

        loadImages();
    }, []);



    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} imageSources={imageSources} navigate={navigate} />
    )
}
