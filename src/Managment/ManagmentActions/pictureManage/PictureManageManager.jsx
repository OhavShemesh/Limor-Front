import React, { useCallback, useEffect, useState } from "react";
import PictureManage from "./PictureManage";
import axios from "axios";

export default function PictureManageManager() {
    const [allImages, setAllImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAllPictures = useCallback(async () => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            const allPictures = await axios.get(`${baseUrl}/get-all-images`);
            setAllImages(allPictures.data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllPictures();
    }, [fetchAllPictures]);

    const convertToBase64 = (byteArray) => {
        return btoa(
            new Uint8Array(byteArray).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );
    };

    const deleteImageById = async (imageId) => {
        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL;
            await axios.delete(`${baseUrl}/delete-image-by-id/${imageId}`);
            setAllImages((prevImages) =>
                prevImages.filter((image) => image._id !== imageId)
            );
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <PictureManage
            allImages={allImages}
            convertToBase64={convertToBase64}
            deleteImageById={deleteImageById}
        />
    );
}
