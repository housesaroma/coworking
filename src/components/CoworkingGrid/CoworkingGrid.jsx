import React from "react";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import cl from "./CoworkingGrid.module.css";
import { AvailabilityCoworkingList, CoworkingList } from "../../utils/coworkings";

const CoworkingGrid = ({ filterData }) => {

const formatDateTime = (dateString, timeString) => {
    const [day, month, year] = dateString.split('.');
    const [hour, minute] = timeString.split(':');
    const dateTimeStart = new Date(year, month - 1, day, hour, minute);
    const dateTimeEnd = new Date(dateTimeStart);
    dateTimeEnd.setHours(dateTimeStart.getHours() + 1);

    const formatDate = (date) => {
        const pad = (num) => num.toString().padStart(2, '0');
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    };

    // console.log(formatDate(dateTimeStart));
    // console.log(formatDate(dateTimeEnd));
    return {
        dateTimeStart: formatDate(dateTimeStart),
        dateTimeEnd: formatDate(dateTimeEnd),
    };
};

    let coworkingSpaces;
    if (filterData && filterData.date && filterData.time && filterData.capacity !== undefined) {
        const { dateTimeStart, dateTimeEnd } = formatDateTime(filterData.date, filterData.time);
        coworkingSpaces = AvailabilityCoworkingList(dateTimeStart, dateTimeEnd, filterData.capacity);
    } else {
        coworkingSpaces = CoworkingList();
    }

    return (
        <div className={cl.grid}>
            {coworkingSpaces.map((space, index) => (
                <CoworkingCard
                    key={space.id}
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