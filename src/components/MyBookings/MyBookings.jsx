import { default as React, useState } from "react";
import {
    CoworkingListMonth,
    CoworkingListToday,
    CoworkingListTomorrow,
    CoworkingListWeek,
} from "../../api/MyCoworkingList";
import arrow from "../../assets/icons/arrow.svg";
import CoworkingCardTime from "../../components/CoworkingCardTime/CoworkingCardTime";
import cl from "./MyBookings.module.css";
import { formatDateTime } from "../../utils/format";

const MyBookings = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const coworkingSpacesToday = CoworkingListToday();
    const coworkingSpacesTomorrow = CoworkingListTomorrow();
    const coworkingSpacesWeek = CoworkingListWeek();
    const coworkingSpacesMonth = CoworkingListMonth();

    const getCoworkingSpaces = (section) => {
        switch (section) {
            case "Сегодня":
                return coworkingSpacesToday;
            case "Завтра":
                return coworkingSpacesTomorrow;
            case "На этой неделе":
                return coworkingSpacesWeek;
            case "В ближайший месяц":
                return coworkingSpacesMonth;
            default:
                return [];
        }
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
                                {getCoworkingSpaces(section).map((space, index) => (
                                    <CoworkingCardTime
                                        key={index}
                                        src={space.src}
                                        title={space.title}
                                        description={space.description}
                                        places={space.places}
                                        subtitle={`Свободных мест осталось: ${space.places}`}
                                        start={`Начало бронирования: ${formatDateTime(space.start)}`}
                                        end={`Окончание бронирования: ${formatDateTime(space.end)}`}
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
