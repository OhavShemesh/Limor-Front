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
    const [imageSrc, setImageSrc] = useState('');
    const [preview, setPreview] = useState()
    const [selectedImageFile, setSelectedImageFile] = useState()
    const navigate = useNavigate()

    const fetchProduct = useCallback(async () => {
        setIsLoading(true);
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const fetchedProduct = await axios.get(`${baseUrl}/products/${id}`);
            setProduct(fetchedProduct.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (product) {
            getImage();
        }
    }, [product]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    const { handleChange, requestTemplate } = useForm(editProductInitial)

    const handleSubmit = async (productId) => {
        try {
            console.log("requestTemplate", requestTemplate);

            let upload = await handleUpload()
            if (!upload == "success") {
                alert("failed")
            }
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.put(`${baseUrl}/products/updateProduct/${productId}`, requestTemplate);

        } catch (err) {
            console.log(err);
        } finally {
            await fetchProduct()
        }
    };

    const fetchImage = async (imageId) => {
        try {
            setIsLoading(true)
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const response = await axios.get(`${baseUrl}/get-image-by-id/${imageId}`);
            return response.data.image
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false)
        }
    };

    const getImage = async () => {
        const image = await fetchImage(product?.imageUrl);
        setImageSrc(image);
    };

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


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedImageFile(file);
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            handleChange({ target: { name: 'imageUrl', value: file.name } });
        }
    };


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <EditSingleProduct product={product} navigate={navigate} handleChange={handleChange} handleSubmit={handleSubmit} fetchImage={fetchImage} imageSrc={imageSrc} preview={preview} handleFileChange={handleFileChange} />
    )
}
