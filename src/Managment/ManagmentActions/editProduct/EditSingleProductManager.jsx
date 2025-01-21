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
            const fetchedProduct = await axios.get(`http://localhost:3000/products/${id}`);
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
            const newProduct = await axios.put(`http://localhost:3000/products/${id}`, requestTemplate)
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
