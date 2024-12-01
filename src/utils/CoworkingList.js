import { useContext, useEffect, useState } from "react";
import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import card4 from "../assets/cards/card4.jpg";
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
                const images = [card1, card2, card3, card4];
                const updatedCoworkings = data.map((coworking, index) => ({
                    id: coworking.coworkingId,
                    title: coworking.name,
                    description: coworking.description,
                    src: images[index % images.length], // Cycle through images
                    places: coworking.totalCapacity, // Fixed number of places
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};