import Service from "../api/Service";

export const tryLogin = (formData, setIsAuth, setErrorMessage, setAuthToken) => {
    return async (event) => {
        event.preventDefault();

        for (const key in formData) {
            if (formData[key].trim() === "") {
                setErrorMessage("Все поля должны быть заполнены!");
                return;
            }
        }

        try {
            const response = await Service.loginUser(
                formData.email,
                formData.password
            );
            if (response.status === 200) {
                const bearerToken = response.data.accessToken;
                setAuthToken(bearerToken);
                localStorage.setItem("authToken", bearerToken);
                setIsAuth(true);
                localStorage.setItem("auth", "true");
                console.log("Login successful!");
                setErrorMessage(null);
                // console.log(bearerToken)
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("Unauthorizedd");
                setErrorMessage("Почта не была подтверждена!");
            } else {
                console.error("Login failed:", error);
                setErrorMessage("Ошибка входа, попробуйте снова.");
            }
        }
    };
};
