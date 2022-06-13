import { useState, useCallback } from 'react';


export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);

    const cleanForm = () => {
        setForm(initialState)
    }

    const setInputErrors = useCallback((errors) => {
        for (const k in errors) {
            if (form.hasOwnProperty(k)) {
                setForm(form => ({
                    ...form,
                    [k]: {
                        ...form[k],
                        error: errors[k][0]
                    }
                }))
            }
        }
    },[form])
    
    const setInputValues = useCallback((values)  => {
        for (const k in values) {
            if (form.hasOwnProperty(k)) {
                setForm(form => ({
                    ...form,
                    [k]: {
                        ...form[k],
                        value: values[k]
                    }
                }))
            }
        }
    }, [form]);

    const handleInputChange = useCallback(({ target }) => {
        setForm(form => ({
            ...form,
            [target.name] : {
                value: target.value,
                error: ''
            }
        }));
    }, []);

    return [form, handleInputChange, setInputErrors, setInputValues, cleanForm];
};