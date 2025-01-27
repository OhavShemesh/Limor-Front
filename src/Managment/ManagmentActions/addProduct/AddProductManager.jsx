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
    const [countdown, setCountdown] = useState(0);
    const [isCounting, setIsCounting] = useState(false); //

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
            return "success"
        } catch (err) {
            console.error(err);
            alert('Failed to upload image.');
            return "failed"
        }
    };


    const handleSubmit = async () => {
        try {
            let upload = await handleUpload();
            console.log(upload);
            if (upload !== "success") {
                alert("Upload failed");
                return;
            }

            console.log(requestTemplate);

            // Start countdown and display it on the screen
            setCountdown(5);
            setIsCounting(true);
            const countdownInterval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        setIsCounting(false); // Stop showing countdown when it reaches 0
                    }
                    return prev - 1;
                });
            }, 1000);

            // Send the request
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.post(`${baseUrl}/products`, requestTemplate);

            // Wait for the countdown to finish
            await new Promise((resolve) => setTimeout(resolve, 5000));

            // Check response and alert success
            console.log(response.data);
            alert("Product created successfully!");
        } catch (err) {
            // Wait for the countdown to finish
            await new Promise((resolve) => setTimeout(resolve, 5000));

            // Alert problem
            console.log(err);
            alert("There was a problem creating the product.");
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
        <AddProduct navigate={navigate} handleChange={handleChange} handleSubmit={handleSubmit} preview={preview} selectedImageFile={selectedImageFile} handleFileChange={handleFileChange} isCounting={isCounting} countdown={countdown}/>
    )
}
