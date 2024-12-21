import React, { useState } from "react";
import CoworkingAdvantages from "../../components/CoworkingAdvantages/CoworkingAdvantages";
import CoworkingGrid from "../../components/CoworkingGrid/CoworkingGrid";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainPageHead from "../../components/MainPageHead/MainPageHead";
import Map from "../../components/Map/Map";
import {
    firstDateOption,
    firstTimeOption
} from "../../utils/generateOptions";
import cl from "./MainPage.module.css";

const MainPage = () => {
    const [filterData, setFilterData] = useState({
        capacity: 1,
        date: firstDateOption(),
        time: firstTimeOption(),
    });

    return (
        <div>
            <Header title={"Главная"} showIcons={true} />
            <MainPageHead />
            <section className={cl.mainPage}>
                <Filter onFilterChange={setFilterData} />
                <h2 className={cl.title}>Выбрать коворкинг</h2>
                <CoworkingGrid filterData={filterData} />
                <CoworkingAdvantages />
                <Map />
                <Footer />
            </section>
        </div>
    );
};

export default MainPage;
