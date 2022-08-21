import React, { useState } from 'react';

interface Form{
    name: string;
    email: string;
    message: string;
  }

  interface Errors{
    name?: string;
    email?: string;
    message?: string;
  }

export const useForm = (initialForm : Form, validateForm : (form: Form) => Errors) => {
    const [form, setForm] = useState<Form>(initialForm);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<string | null>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            setLoading(true);
            fetch("https://formsubmit.co/ajax/ifimbres@uabc.edu.mx", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        message: form.message
                    }),
            }).then(response => response ? setResponse('Thank you for your interest!') : setResponse('Something went wrong')).then(data => console.log(data)).catch(error => console.log(error));
            setLoading(false);
        }
        else{
            return;
        }
    }

    const handleBlur = (e:React.FormEvent<HTMLInputElement>) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleBlur,
        handleChange
    };
}