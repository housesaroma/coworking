import { useState } from "react";
import { host } from "./HostConst";

export function useUserInfo(authToken, setData) {
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserInfo = async () => {
        setIsLoading(true); // Set loading to true before fetching
        try {
            // await new Promise(resolve => setTimeout(resolve, 10000));
            const response = await fetch(`${host}/api/main/user-info`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const userInfo = await response.json();
            const [lastName, firstName, middleName] = userInfo.fullName.split(" ");
            setData({
                lastName: lastName || "",
                firstName: firstName || "",
                middleName: middleName || "",
                email: userInfo.username,
                // password: "qwerty123", Keep the password unchanged 
                photoUrl: userInfo.photoUrl
            });
        } catch (error) {
            console.error("Error fetching user info:", error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching
        }
    };

    return { fetchUserInfo, isLoading };
}