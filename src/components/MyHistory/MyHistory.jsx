import React, { useState } from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import arrow from "../../assets/icons/arrow.svg";
import CoworkingCard from "../../components/CoworkingCard/CoworkingCard";
import cl from "./MyHistory.module.css";

const MyHistory = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const coworkingSpaces = [
        { src: card1, title: "Территория идей", places: 15 },
        { src: card2, title: "Территория столов", places: 30 },
        { src: card3, title: "Территория светильников", places: 25 },
    ];

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div>
            <h1 className={cl.title}>История</h1>
            <div className={cl.accordion}>
                {[
                    "Успешные бронирования",
                    "Отклоненные бронирования",
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

export default MyHistory;
