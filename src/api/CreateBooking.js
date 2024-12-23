import { host } from "./HostConst";

export const CreateBooking = async (
    authToken,
    coworkingId,
    startTime,
    endTime,
    capacity
) => {
    try {
        const response = await fetch(
            `${host}/api/main/bookings/create-booking`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    coworkingId,
                    startTime,
                    endTime,
                    capacity,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const result = await response.text();
        console.log("Booking successful:", result);
    } catch (error) {
        console.error("Error creating booking:", error);
    }
};
