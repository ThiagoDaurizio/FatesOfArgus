import { useState } from "react";

export const useForm = (initialState) => {
    const [form, set_form] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target

        set_form({...form, [name]: value})
    }

    const clearInputs = () => {
        set_form(initialState)
    }

    return { form, onChange, clearInputs }
}