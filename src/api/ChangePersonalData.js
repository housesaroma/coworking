import { host } from "./HostConst";

export const ChangePersonalData = async (
    authToken,
    fullName,
    username,
) => {
    try {
        const response = await fetch(
            `${host}/api/main/update-user-info`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    username,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.text();
        console.log("Successful:", result);
    } catch (error) {
        console.error("Error changing personal data:", error);
    }
};
