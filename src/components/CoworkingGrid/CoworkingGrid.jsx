import React from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import card4 from "../../assets/cards/card4.jpg";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import cl from "./CoworkingGrid.module.css";

const CoworkingGrid = ({ selectedCapacity }) => {
    const coworkingSpaces = [
        {
            src: card1,
            title: "Территория идей",
            places: 15,
            description:
                "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
        },
        {
            src: card2,
            title: "Территория столов",
            places: 30,
            description:
                "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
        },
        {
            src: card3,
            title: "Территория светильников",
            places: 25,
            description:
                "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
        },
        {
            src: card4,
            title: "Территория макбуков",
            places: 10,
            description:
                "Пространство коворкинга – это уютное помещение, в котором студенты  могут  подготовиться  к учебным занятиям, пообщаться, а также перекусить и выпить  стаканчик вкусного кофе. Интерьер выполнен в современном  стиле: яркая графика стен и удобная  мебель создают  уютную и комфортную атмосферу для общения и занятий. ",
        },
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
                    description={space.description}
                    places={space.places}
                    subtitle={`Свободных мест осталось: ${space.places}`}
                />
            ))}
        </div>
    );
};

export default CoworkingGrid;
