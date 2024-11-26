import Service from "../api/Service";

export const tryRegister = (formData, setErrorMessage, setIsAuth) => {
    return async (event) => {
        event.preventDefault();

        for (const key in formData) {
            if (formData[key].trim() === "") {
                setErrorMessage("Все поля должны быть заполнены!");
                return;
            }
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Пароли должны совпадать!");
            return;
        }
        try {
            const response = await Service.registerUser(
                formData.email,
                formData.password,
                `${formData.lastName} ${formData.firstName} ${formData.middleName}`
            );
            if (response.status === 200) {
                setIsAuth(true);
                localStorage.setItem("auth", "true");
                console.log("Registration successful!");
                setErrorMessage(null);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                console.log("Such mail has already been used");
                setErrorMessage("Такая почта уже была зарегистрирована ранее.");
            } else if (error.response && error.response.status === 400) {
                console.log("Incorrect mail");
                setErrorMessage("Неверный формат почты.");
            } else {
                console.error("Registration failed:", error);
                setErrorMessage("Ошибка регистрации, попробуйте снова.");
            }
        }
    };
};
