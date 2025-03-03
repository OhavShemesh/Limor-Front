import React, { useEffect, useState } from 'react'
import SingleProductDisplay from './SingleProductDisplay'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../../Cart/Provider/CartProvider'

export default function SingleProductDisplayManager() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [singleProduct, setSingleProduct] = useState()
    const [imageSrc, setImageSrc] = useState()
    const { addToCart } = useCart()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;

                console.log(`${baseUrl}/products/${id}`);

                const product = await axios.get(`${baseUrl}/products/${id}`)

                setSingleProduct(product.data)


            } catch (err) {
                console.log(err);

            } finally {
                setIsLoading(false)
            }
        }
        fetchProduct()
    }, [])

    function formatDescription(description) {
        let formatted = description;

        formatted = formatted.replace(/;/g, "<br />");

        formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        formatted = formatted.replace(/__(.*?)__/g, "<u>$1</u>");

        formatted = formatted.replace(/^\* (.*)/gm, "• $1");

        return formatted;
    }

    const fetchImage = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;

            const response = await axios.get(`${baseUrl}/get-image-by-id/${singleProduct.imageUrl}`);
            setImageSrc(response.data.image)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchImage()
    }, [singleProduct])


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <SingleProductDisplay product={singleProduct} formatDescription={formatDescription} imageSrc={imageSrc} addToCart={addToCart} navigate={navigate}/>
    )
}
