import { useState } from 'react';

const useForm = (initialForm) => {
    const [requestTemplate, setRequestTemplate] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            // Handle file input
            setRequestTemplate((prev) => ({
                ...prev,
                [name]: files[0] // Take the first file from the FileList
            }));
        } else {
            // Handle text input
            setRequestTemplate((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    return { requestTemplate, handleChange };
};

export default useForm;
