import { useState } from "react";
import Service from "./Service";

export const useRegister = (formData, setErrorMessage, setSuccessMessage) => {
    const [isLoading, setIsLoading] = useState(false);

    const register = async (event) => {
        event.preventDefault();

        for (const key in formData) {
            if (formData[key].trim() === "") {
                setSuccessMessage(null);
                setErrorMessage("Все поля должны быть заполнены!");
                return;
            }
        }

        if (formData.password !== formData.confirmPassword) {
            setSuccessMessage(null);
            setErrorMessage("Пароли должны совпадать!");
            return;
        }
        try {
            setIsLoading(true);
            const response = await Service.registerUser(
                formData.email,
                formData.password,
                `${formData.lastName} ${formData.firstName} ${formData.middleName}`
            );
            if (response.status === 200) {
                setErrorMessage(null);
                setSuccessMessage(
                    "Успешная регистрация! На почту пришло письмо для подтвержения."
                );
            }
        } catch (error) {
            setSuccessMessage(null);
            if (error.response && error.response.status === 409) {
                setErrorMessage("Такая почта уже была зарегистрирована ранее.");
            } else if (error.response && error.response.status === 400) {
                setErrorMessage("Неверный формат почты.");
            } else {
                setErrorMessage("Ошибка регистрации, попробуйте снова.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { register, isLoading };
};