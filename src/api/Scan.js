import { host } from "./HostConst";

export async function Scan(decodedText) {
    try {
        const response = await fetch(
            `${host}/api/main/door/unlock`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ qr_code: decodedText }), // Отправляем QR-код в теле запроса
            }
        );

        if (!response.ok) {
            throw new Error("Failed to unlock the door");
        }

    } catch (error) {
        console.error("Error unlocking the door:", error);
        throw error; // Re-throw the error to be caught in the calling function
    }
}
