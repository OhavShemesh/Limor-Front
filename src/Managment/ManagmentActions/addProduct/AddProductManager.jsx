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
    const [selectedImageFile, setSelectedImageFile] = useState(null);

    const handleUpload = async () => {
        if (!selectedImageFile) {
            alert('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImageFile);

        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/upload-image`, formData);
            alert('Image uploaded successfully!');
            setSelectedImageFile(null);
            setPreview(null);
            return "success"
        } catch (err) {
            console.error(err);
            alert('Failed to upload image.');
            return "failed"
        }
    };


    const handleSubmit = async () => {
        try {
            let upload = await handleUpload()
            if (!upload == "success") {
                alert("failed")
            }
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/products`, requestTemplate);

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
