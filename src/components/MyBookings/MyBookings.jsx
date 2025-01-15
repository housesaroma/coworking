import { default as React, useState } from "react";
import {
    getCoworkingSpaces,
    getNotCoworkingSpaces,
} from "../../api/CoworkingSpaces";
import {
    CoworkingListMonth,
    CoworkingListToday,
    CoworkingListTomorrow,
    CoworkingListWeek,
} from "../../api/MyCoworkingList";
import arrow from "../../assets/icons/arrow.svg";
import CoworkingCardTime from "../../components/CoworkingCardTime/CoworkingCardTime";
import { formatDateTime } from "../../utils/format";
import cl from "./MyBookings.module.css";

const MyBookings = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const coworkingSpacesToday = CoworkingListToday();
    const coworkingSpacesTomorrow = CoworkingListTomorrow();
    const coworkingSpacesWeek = CoworkingListWeek();
    const coworkingSpacesMonth = CoworkingListMonth();

    const coworkingSpaces = getCoworkingSpaces(expandedSection, {
        coworkingSpacesToday,
        coworkingSpacesTomorrow,
        coworkingSpacesWeek,
        coworkingSpacesMonth,
    });
    const notCoworkingSpaces = getNotCoworkingSpaces(expandedSection);

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
                                {coworkingSpaces.length > 0 ? (
                                    coworkingSpaces.map((space, index) => (
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
                                    ))
                                ) : (
                                    <p>{notCoworkingSpaces}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
