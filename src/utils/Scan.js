export async function Scan(decodedText) {
    try {
        const response = await fetch(`http://localhost:8070/api/main/door/unlock?${decodedText}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to unlock the door");
        }

        console.log("Door unlocked successfully");
    } catch (error) {
        console.error("Error unlocking the door:", error);
        throw error; // Re-throw the error to be caught in the calling function
    }
}