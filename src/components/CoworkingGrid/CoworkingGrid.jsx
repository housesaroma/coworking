import React from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import card4 from "../../assets/cards/card4.jpg";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import cl from "./CoworkingGrid.module.css";

const CoworkingGrid = ({ selectedCapacity }) => {
    const coworkingSpaces = [
        { src: card1, title: "Территория идей", places: 15 },
        { src: card2, title: "Территория столов", places: 30 },
        { src: card3, title: "Территория светильников", places: 25 },
        { src: card4, title: "Территория макбуков", places: 10 },
    ];

    const filteredSpaces = coworkingSpaces.filter(
        (space) => !selectedCapacity || space.places >= selectedCapacity
    );

    return (
        <div className={cl.grid}>
            {filteredSpaces.map((space, index) => (
                <CoworkingCard
                    key={index}
                    src={space.src}
                    title={space.title}
                    subtitle={`Свободных мест осталось: ${space.places}`}
                />
            ))}
        </div>
    );
};

export default CoworkingGrid;
