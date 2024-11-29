import React from "react";
import CoworkingCard from "../CoworkingCard/CoworkingCard";
import cl from "./CoworkingGrid.module.css";
import CoworkingList, { coworkings } from "../../utils/coworkings";

const CoworkingGrid = ({ selectedCapacity }) => {
    const coworkingSpaces = CoworkingList();

    const filteredSpaces = coworkingSpaces.filter(
        (space) => !selectedCapacity || space.places >= selectedCapacity
    );

    return (
        <div className={cl.grid}>
            {filteredSpaces.map((space, index) => (
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
    );
};

export default CoworkingGrid;
