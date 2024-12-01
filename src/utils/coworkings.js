import { useContext, useEffect, useState } from "react";
import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import card4 from "../assets/cards/card4.jpg";
import { AuthContext } from "../components/context";

export const coworkings = [
    {
        src: card1,
        title: "Территория идей",
        places: 15,
        description: "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
    },
    {
        src: card2,
        title: "Территория столов",
        places: 30,
        description: "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
    },
    {
        src: card3,
        title: "Территория светильников",
        places: 25,
        description: "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
    },
    {
        src: card4,
        title: "Территория макбуков",
        places: 10,
        description: "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
    },
];

export const CoworkingList = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken, setAuthToken } = useContext(AuthContext);


    useEffect(() => {
        fetch('http://localhost:8070/api/main/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
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
            .catch(error => console.error('Error fetching coworkings:', error));
    }, [authToken]); 
    return coworkings;
};

export const AvailabilityCoworkingList = (dateTimeStart, dateTimeEnd, capacity) => {
    const [availability, setAvailability] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8070/api/main/availability', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        dateTimeStart,
                        dateTimeEnd,
                        capacity
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const responseText = await response.text(); // Get response as text
                try {
                    const data = JSON.parse(responseText); // Attempt to parse JSON
                    const images = [card1, card2, card3, card4];
                    const updatedAvailability = data.map((coworking, index) => ({
                        id: coworking.coworkingId,
                        title: coworking.name,
                        description: coworking.description,
                        src: images[index % images.length],
                        places: coworking.availableCapacity,
                    }));
                    setAvailability(updatedAvailability);
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                    console.error('Response text:', responseText);
                }
            } catch (error) {
                console.error('Error fetching availability:', error);
            }
        };

        fetchData();
    }, [authToken, dateTimeStart, dateTimeEnd, capacity]);

    return availability;
};