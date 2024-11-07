import React, { useState } from "react";
import CoworkingCards from "../CoworkingGrid/CoworkingGrid";
import Filter from "../Filter/Filter";
import MainPageHead from "../MainPageHead/MainPageHead";
import cl from "./MainPage.module.css";

const MainPage = () => {
    const [selectedCapacity, setSelectedCapacity] = useState(null);

    return (
        <div>
            <MainPageHead />
            <section className={cl.mainPage}>
                <Filter onCapacityChange={setSelectedCapacity} />
                <h2 className={cl.title}>Выбрать коворкинг</h2>
                <CoworkingCards selectedCapacity={selectedCapacity} />
            </section>
        </div>
    );
};

export default MainPage;
