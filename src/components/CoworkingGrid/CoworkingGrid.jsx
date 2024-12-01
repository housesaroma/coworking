import React from "react";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import cl from "./CoworkingGrid.module.css";
import { reformatDateTime } from "../../utils/format";
import { CoworkingList } from "../../utils/CoworkingList";
import { AvailabilityCoworkingList } from "../../utils/AvailabilityCoworkingList";


const CoworkingGrid = ({ filterData }) => {
    const formatDateTime = reformatDateTime;

    let coworkingSpaces;
    if (
        filterData &&
        filterData.date &&
        filterData.time &&
        filterData.capacity !== undefined
    ) {
        const { dateTimeStart, dateTimeEnd } = formatDateTime(
            filterData.date,
            filterData.time
        );
        coworkingSpaces = AvailabilityCoworkingList(
            dateTimeStart,
            dateTimeEnd,
            filterData.capacity
        );
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
                    id={space.id}
                />
            ))}
        </div>
    );
};

export default CoworkingGrid;
