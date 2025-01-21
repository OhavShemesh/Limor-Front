import React, { useCallback, useEffect, useState } from 'react'
import EditSingleProduct from './EditSingleProduct'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/FormControl'
import editProductInitial from '../../hooks/initialForms/editProductInitial'

export default function EditSingleProductManager() {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const fetchProduct = useCallback(async () => {
        setIsLoading(true);
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const fetchedProduct = await axios.get(`${baseUrl}/products/${id}`);
            setProduct(fetchedProduct.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProduct(); // Fetch products on component mount
    }, [fetchProduct]);

    const { handleChange, requestTemplate } = useForm(editProductInitial)
    const handleSubmit = async () => {
        try {
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const newProduct = await axios.put(`${baseUrl}/products/${id}`, requestTemplate)
            console.log(newProduct.data);
            await fetchProduct()
        } catch (err) {
            console.log(err);

        }

    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <EditSingleProduct product={product} navigate={navigate} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}
