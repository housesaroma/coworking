import React, { useState } from "react";
import {
    CoworkingListCancelled,
    CoworkingListFinished,
} from "../../api/MyCoworkingList";
import arrow from "../../assets/icons/arrow.svg";
import CoworkingCardTime from "../../components/CoworkingCardTime/CoworkingCardTime";
import { formatDateTime } from "../../utils/format";
import cl from "./MyHistory.module.css";

const MyHistory = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const coworkingSpacesCancelled = CoworkingListCancelled();
    const coworkingSpacesFinished = CoworkingListFinished();

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
                                    {(section === "Успешные бронирования"
                                        ? coworkingSpacesFinished
                                        : coworkingSpacesCancelled
                                    ).map((space, index) => (
                                        <CoworkingCardTime
                                            key={index}
                                            src={space.src}
                                            title={space.title}
                                            description={space.description}
                                            places={space.places}
                                            subtitle={`Свободных мест осталось: ${space.places}`}
                                            start={`Начало бронирования: ${formatDateTime(
                                                space.start
                                            )}`}
                                            end={`Окончание бронирования: ${formatDateTime(
                                                space.end
                                            )}`}
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
