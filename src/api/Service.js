import axios from "axios";

export default class Service {
    static async registerUser(email, password, fullName) {
        const response = await axios.post(
            "http://localhost:8070/api/auth/register",
            {
                email: email,
                password: password,
                full_name: fullName,
            },
            {
                headers: {
                    "Content-Type": "application/json", // Ensure the content type is set
                },
                withCredentials: true, // Include credentials if needed
            }
        );
        return response;
    }

    static async loginUser(email, password) {
        const response = await axios.post(
            "http://localhost:8070/api/auth/login",
            {
                email: email,
                password: password,
            },
            {
                headers: {
                    "Content-Type": "application/json", // Ensure the content type is set
                },
                withCredentials: true, // Include credentials if needed
            }
        );
        return response;
    }
}
