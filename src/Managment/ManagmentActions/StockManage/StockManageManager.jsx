import React, { useCallback, useEffect, useState } from 'react'
import StockManage from './StockManage'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function StockManageManager() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState()
    const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [imageSources, setImageSources] = useState({});
    const [stockDetermineInput, setStockDetermineInput] = useState({})
    const [stockAdditionInput, setStockAdditionInput] = useState({})



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

    const handleMouseEnter = (product, event) => {
        const rect = event.target.getBoundingClientRect();
        setCardPosition({ top: rect.top + window.scrollY, left: rect.right + 10 });
        setHoveredProduct(product);
    };
    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    const handleDetermineStock = async (productId) => {
        try {
            const newStock = stockDetermineInput[productId];

            if (!newStock) {
                console.log(`No stock value provided for product ID: ${productId}`);
                return;
            }

            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const product = await axios.patch(`${baseUrl}/products/determineStock/${productId}`, { newStock });
        } catch (err) {
            console.error("Error updating stock:", err);
        } finally {
            fetchProducts()
        }
    };

    const handleAddToStock = async (productId) => {
        try {
            const stockAddition = stockAdditionInput[productId];

            if (!stockAddition) {
                console.log(`No stock value provided for product ID: ${productId}`);
                return;
            }

            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const product = await axios.patch(`${baseUrl}/products/addToStock/${productId}`, { stockAddition });
        } catch (err) {
            console.error("Error updating stock:", err);
        } finally {
            fetchProducts()
        }
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

    const handleChangeDetermineValue = (e) => {
        const { name, value } = e.target
        setStockDetermineInput((prev) => ({ ...prev, [name]: value }))
    }
    const handleChangeAdditionValue = (e) => {
        const { name, value } = e.target
        setStockAdditionInput((prev) => ({ ...prev, [name]: value }))
    }


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <StockManage navigate={navigate} allProducts={allProducts} handleMouseEnter={handleMouseEnter} hoveredProduct={hoveredProduct} cardPosition={cardPosition} handleMouseLeave={handleMouseLeave} handleDetermineStock={handleDetermineStock} imageSources={imageSources} handleChangeDetermineValue={handleChangeDetermineValue} handleChangeAdditionValue={handleChangeAdditionValue} handleAddToStock={handleAddToStock} />
    )
}
