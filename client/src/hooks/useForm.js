import { useState, useCallback } from "react";

function useForm(initialValues, validate) {
    const [values, setValuesState] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const setValues = useCallback((newValues) => {
        setValuesState(newValues);
    }, []);

    const handleChange = (field) => (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        
        setValuesState(prev => ({ ...prev, [field]: value }));
        
        // Clear error for this field immediately
        setErrors(prev => ({ ...prev, [field]: "" }));
    };

    const handleSubmit = (onSubmit) => (e) => {
        e.preventDefault();
        const validationErrors = validate ? validate(values) : {};
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues
    };
}

export default useForm;