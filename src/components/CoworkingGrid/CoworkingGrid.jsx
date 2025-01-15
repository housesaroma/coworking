import React from "react";
import { AvailabilityCoworkingList } from "../../api/AvailabilityCoworkingList";
import { CoworkingList } from "../../api/CoworkingList";
import { reformatDateTime } from "../../utils/format";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import Loader from "../UI/Loader/Loader";
import cl from "./CoworkingGrid.module.css";

const CoworkingGrid = ({ filterData }) => {
    const formatDateTime = reformatDateTime;

    const { dateTimeStart, dateTimeEnd } = formatDateTime(
        filterData.date,
        filterData.time
    );
    const { availability, isLoading } = AvailabilityCoworkingList(
        dateTimeStart,
        dateTimeEnd,
        filterData.capacity
    );

    let coworkingSpaces;
    if (
        filterData &&
        filterData.date &&
        filterData.time &&
        filterData.capacity !== undefined
    ) {
        coworkingSpaces = availability; // Assign the correct value
    } else {
        coworkingSpaces = CoworkingList();
    }

    return (
        <div>
            <div className={cl.loader}>{isLoading && <Loader />}</div>
            <div className={cl.grid}>
                {!isLoading &&
                    coworkingSpaces.map((space) => (
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
        </div>
    );
};

export default CoworkingGrid;
