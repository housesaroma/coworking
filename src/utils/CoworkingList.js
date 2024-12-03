import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context";


export const CoworkingList = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch("http://localhost:8070/api/main/", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((coworking) => ({
                    id: coworking.coworkingId,
                    title: coworking.name,
                    description: coworking.description,
                    src: coworking.mainPhoto,
                    places: coworking.totalCapacity,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};