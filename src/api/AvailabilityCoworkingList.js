import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context";

export const AvailabilityCoworkingList = (
    dateTimeStart,
    dateTimeEnd,
    capacity
) => {
    const [availability, setAvailability] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8070/api/main/availability",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            dateTimeStart,
                            dateTimeEnd,
                            capacity,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const responseText = await response.text(); // Get response as text
                try {
                    const data = JSON.parse(responseText); // Attempt to parse JSON
                    const updatedAvailability = data.map(
                        (coworking) => ({
                            id: coworking.coworkingId,
                            title: coworking.name,
                            description: coworking.description,
                            src: coworking.imageUrl,
                            places: coworking.availableCapacity,
                        })
                    );
                    setAvailability(updatedAvailability);
                } catch (jsonError) {
                    console.error("Error parsing JSON:", jsonError);
                    console.error("Response text:", responseText);
                }
            } catch (error) {
                console.error("Error fetching availability:", error);
            }
        };

        fetchData();
    }, [authToken, dateTimeStart, dateTimeEnd, capacity]);

    return availability;
};