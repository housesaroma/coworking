import React, { useState } from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import card4 from "../../assets/cards/card4.jpg";
import CoworkingCard from "../../components/CoworkingCard/CoworkingCard";
import arrow from "../../assets/icons/arrow.svg";
import cl from "./MyBookings.module.css";

const MyBookings = () => {
    const [expandedSection, setExpandedSection] = useState(null);

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

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div>
            <h1 className={cl.title}>Мои бронирования</h1>
            <div className={cl.accordion}>
                {[
                    "Сегодня",
                    "Завтра",
                    "На этой неделе",
                    "В ближайший месяц",
                ].map((section, index) => (
                    <div
                        key={index}
                        className={cl.accordionItem}
                        onClick={() => toggleSection(section)}
                    >
                        <div className={cl.accordionHeader}>
                            {section}
                            <img
                                src={arrow}
                                alt="arrow"
                                width={"20px"}
                                height={"20px"}
                                className={cl.arrow}
                            ></img>
                        </div>
                        {expandedSection === section && (
                            <div className={cl.cardContainer}>
                                {coworkingSpaces.map((space, index) => (
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
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
