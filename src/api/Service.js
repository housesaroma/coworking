import axios from "axios";

export default class Service {
    static async registerUser(email, password, fullName) {
        try {
            const response = await axios.post(
                "http://localhost:8070/api/auth/register",
                {
                    email: email,
                    password: password,
                    full_name: fullName,
                },
                {
                    headers: {
                        'Content-Type': 'application/json', // Ensure the content type is set
                    },
                    withCredentials: true, // Include credentials if needed
                }
            );
            return response;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    }
}
