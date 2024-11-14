import React, { useState } from "react";
import CoworkingAdvantages from "../../components/CoworkingAdvantages/CoworkingAdvantages";
import CoworkingCards from "../../components/CoworkingGrid/CoworkingGrid";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainPageHead from "../../components/MainPageHead/MainPageHead";
import Map from "../../components/Map/Map";
import cl from "./MainPage.module.css";

const MainPage = () => {
    const [selectedCapacity, setSelectedCapacity] = useState(null);

    return (
        <div>
            <Header title={"Главная"} showIcons={true} />
            <MainPageHead />
            <section className={cl.mainPage}>
                <Filter onCapacityChange={setSelectedCapacity} />
                <h2 className={cl.title}>Выбрать коворкинг</h2>
                <CoworkingCards selectedCapacity={selectedCapacity} />
                <CoworkingAdvantages />
                <Map />
                <Footer />
            </section>
        </div>
    );
};

export default MainPage;
