import React, { useEffect, useState, useCallback } from 'react';
import DeleteProduct from './DeleteProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DeleteProductManager() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imageSources, setImageSources] = useState({});

    const navigate = useNavigate();

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const allFetchedProducts = await axios.get(`${baseUrl}/products`);
            setAllProducts(allFetchedProducts.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDeleteProduct = async (productId) => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            await axios.delete(`${baseUrl}/products/${productId}`);
            await fetchProducts(); 
        } catch (err) {
            console.log(err);
        }
    };

    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (productId) => {
        setFlippedCards((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    };

    const fetchImage = async (imageId) => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.get(`${baseUrl}/get-image-by-id/${imageId}`);
            return response.data.image;
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            try {
                const sources = {};
                for (const product of allProducts) {
                    sources[product._id] = await fetchImage(product.imageUrl);
                }
                setImageSources(sources);
            } catch (err) {
                console.error("Error loading images:", err);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, [allProducts]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <DeleteProduct
            allProducts={allProducts}
            handleDeleteProduct={handleDeleteProduct}
            flippedCards={flippedCards}
            handleFlip={handleFlip}
            navigate={navigate}
            fetchImage={fetchImage}
            imageSources={imageSources}
        />
    );
}
