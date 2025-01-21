import { useState } from 'react';

const useForm = (initialForm) => {
    const [requestTemplate, setRequestTemplate] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRequestTemplate((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return { requestTemplate, handleChange };
};

export default useForm;
