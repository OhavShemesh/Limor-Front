import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/FormControl'
import addProductInitial from '../../hooks/initialForms/addProductInitial'
import axios from 'axios'

export default function AddProductManager() {
    const navigate = useNavigate()
    const { handleChange, requestTemplate } = useForm(addProductInitial)
    const [preview, setPreview] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);  // Store the file

    const handleUpload = async () => {
        if (!selectedImageFile) {
            alert('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImageFile); // Append the selected image

        try {
            const response = await axios.post('http://localhost:3000/upload-image', formData);
            console.log(response.data);
            alert('Image uploaded successfully!');
            setSelectedImageFile(null);
            setPreview(null);
        } catch (err) {
            console.error(err);
            alert('Failed to upload image.');
        }
    };


    const handleSubmit = async () => {
        try {
            await handleUpload()
            console.log(requestTemplate);

            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/products`, requestTemplate);
            console.log(response.data);

        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedImageFile(file);
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            handleChange({ target: { name: 'imageUrl', value: file.name } });
        }
    };

    return (
        <AddProduct navigate={navigate} handleChange={handleChange} handleSubmit={handleSubmit} preview={preview} selectedImageFile={selectedImageFile} handleFileChange={handleFileChange} />
    )
}
