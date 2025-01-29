import React, { useCallback, useEffect, useState } from 'react'
import EditProduct from './EditProduct'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditProductManager() {
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState()
    const [imageSources, setImageSources] = useState({});
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
        fetchProducts(); 
    }, [fetchProducts]);

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
        return <h1>Loading...</h1>
    }
    return (
        <EditProduct
            allProducts={allProducts}
            navigate={navigate}
            fetchImage={fetchImage}
            imageSources={imageSources}
        />
    )
}
