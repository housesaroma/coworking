import React, { useState } from "react";
import CoworkingCards from "../../components/CoworkingGrid/CoworkingGrid";
import Filter from "../../components/Filter/Filter";
import MainPageHead from "../../components/MainPageHead/MainPageHead";
import cl from "./MainPage.module.css";
import CoworkingAdvantages from "../../components/CoworkingAdvantages/CoworkingAdvantages";

const MainPage = () => {
    const [selectedCapacity, setSelectedCapacity] = useState(null);

    return (
        <div>
            <MainPageHead />
            <section className={cl.mainPage}>
                <Filter onCapacityChange={setSelectedCapacity} />
                <h2 className={cl.title}>Выбрать коворкинг</h2>
                <CoworkingCards selectedCapacity={selectedCapacity} />
                <CoworkingAdvantages />
            </section>
        </div>
    );
};

export default MainPage;
