import React, { useState } from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import card4 from "../../assets/cards/card4.jpg";
import CoworkingCard from "../../components/CoworkingCard/CoworkingCard";
import arrow from "../../assets/icons/arrow.svg";
import cl from "./MyBookings.module.css";
import CoworkingList, { coworkings } from "../../utils/coworkings";

const MyBookings = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const coworkingSpaces = coworkings;

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
