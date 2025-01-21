import React, { useEffect, useState, useCallback } from 'react';
import DeleteProduct from './DeleteProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DeleteProductManager() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    // Use useCallback to memoize fetchProducts
    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        try {
            const allFetchedProducts = await axios.get('http://localhost:3000/products');
            setAllProducts(allFetchedProducts.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts(); // Fetch products on component mount
    }, [fetchProducts]);

    const handleDeleteProduct = async (productId) => {
        try {
            console.log('Deleting product with ID:', productId);

            await axios.delete(`http://localhost:3000/products/${productId}`);
            await fetchProducts(); // Fetch the updated product list after deletion
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
        />
    );
}
