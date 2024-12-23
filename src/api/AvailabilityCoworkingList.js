import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context";
import { host } from "./HostConst";

export const AvailabilityCoworkingList = (
    dateTimeStart,
    dateTimeEnd,
    capacity
) => {
    const [availability, setAvailability] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchAvailability = async () => {
            setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch(
                    `${host}/api/main/availability`,
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

                const data = await response.json(); // Parse response as JSON
                const updatedAvailability = data.map((coworking) => ({
                    id: coworking.coworkingId,
                    title: coworking.name,
                    description: coworking.description,
                    src: coworking.imageUrl,
                    places: coworking.availableCapacity,
                }));
                setAvailability(updatedAvailability);
            } catch (error) {
                console.error("Error fetching availability:", error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching
            }
        };

        fetchAvailability();
    }, [authToken, dateTimeStart, dateTimeEnd, capacity]);

    return { availability, isLoading }; // Return loading state along with availability
};
