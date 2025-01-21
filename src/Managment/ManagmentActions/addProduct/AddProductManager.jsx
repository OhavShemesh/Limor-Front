import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/FormControl'
import addProductInitial from '../../hooks/initialForms/addProductInitial'
import axios from 'axios'

export default function AddProductManager() {
    const navigate = useNavigate()
    const { handleChange, requestTemplate } = useForm(addProductInitial)

    const handleSubmit = async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const newProduct = await axios.post(`${baseUrl}/products`, requestTemplate)
            console.log(newProduct.data);

        } catch (err) {
            console.log(err);

        }

    }

    return (
        <AddProduct navigate={navigate} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}
