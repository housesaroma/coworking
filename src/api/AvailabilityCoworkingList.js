import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context";

export const AvailabilityCoworkingList = (dateTimeStart, dateTimeEnd, capacity) => {
    const [availability, setAvailability] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:8070/api/main/availability", {
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
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Parse response as JSON
            })
            .then((data) => {
                const updatedAvailability = data.map((coworking) => ({
                    id: coworking.coworkingId,
                    title: coworking.name,
                    description: coworking.description,
                    src: coworking.imageUrl,
                    places: coworking.availableCapacity,
                }));
                setAvailability(updatedAvailability);
            })
            .catch((error) => {
                console.error("Error fetching availability:", error);
            });
    }, [authToken, dateTimeStart, dateTimeEnd, capacity]);

    return availability;
};