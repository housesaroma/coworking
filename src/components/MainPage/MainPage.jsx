import React from "react";
import cl from "./MainPage.module.css";
import Filter from "../Filter/Filter";
import MainPageHead from "../MainPageHead/MainPageHead";

const MainPage = () => {
    return (
        <div>
            <MainPageHead/>
            <section className={cl.mainPage}>
                <Filter/>
            </section>
        </div>
    );
};

export default MainPage;
