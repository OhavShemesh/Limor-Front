import React, { useCallback, useEffect, useState } from 'react'
import EditProduct from './EditProduct'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditProductManager() {
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState()
    const navigate = useNavigate()

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
        fetchProducts(); // Fetch products on component mount
    }, [fetchProducts]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <EditProduct allProducts={allProducts} navigate={navigate} />
    )
}
