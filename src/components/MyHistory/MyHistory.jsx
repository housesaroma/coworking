import React, { useState } from "react";
import arrow from "../../assets/icons/arrow.svg";
import CoworkingCard from "../../components/CoworkingCard/CoworkingCard";
import cl from "./MyHistory.module.css";
import CoworkingList, { coworkings } from "../../utils/coworkings";

const MyHistory = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const coworkingSpaces = coworkings;

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div>
            <h1 className={cl.title}>История</h1>
            <div className={cl.accordion}>
                {["Успешные бронирования", "Отклоненные бронирования"].map(
                    (section, index) => (
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
                    )
                )}
            </div>
        </div>
    );
};

export default MyHistory;
