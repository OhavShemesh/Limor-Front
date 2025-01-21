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

    const handleUpdateStock = async (productId, newStock) => {
        try {
            const product = await axios.patch(`http://localhost:3000/products/updateStock/${productId}`, { newStock: newStock })
            console.log(product.data);
        } catch (err) {
            console.log(err);

        }
    }



    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <StockManage navigate={navigate} allProducts={allProducts} handleMouseEnter={handleMouseEnter} hoveredProduct={hoveredProduct} cardPosition={cardPosition} handleMouseLeave={handleMouseLeave} handleUpdateStock={handleUpdateStock} />
    )
}
