import React, { useContext, useState } from "react";

import { AuthContext } from "../../components/context";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyRadioButton from "../../components/UI/RadioButton/MyRadioButton";
import cl from "./BookingPage.module.css";
import MyBookings from "../../components/MyBookings/MyBookings";
import PersonalData from "../../components/PersonalData/PersonalData";
import MyHistory from "../../components/MyHistory/MyHistory";

export const BookingPage = () => {
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    const [title, setTitle] = useState("Мои бронирования");

    return (
        <div className={cl.bookingPage}>
            <Header title={title} showIcons={true} />
            <div className={cl.buttonsGroup}>
                <MyRadioButton
                    onClick={() => setTitle("Мои бронирования")}
                    isSelected={title === "Мои бронирования"}
                >
                    Мои бронирования
                </MyRadioButton>
                <MyRadioButton
                    onClick={() => setTitle("Личные данные")}
                    isSelected={title === "Личные данные"}
                >
                    Личные данные
                </MyRadioButton>
                <MyRadioButton
                    onClick={() => setTitle("История бронироования")}
                    isSelected={title === "История бронироования"}
                >
                    История
                </MyRadioButton>
            </div>

            {title === "Мои бронирования" && <MyBookings />}
            {title === "Личные данные" && <PersonalData/>}
            {title === "История бронироования" && <MyHistory/>}
            
            <div className={cl.exitBtn}>
                <MyButton onClick={logout}>Выйти</MyButton>
            </div>

            <Footer />
        </div>
    );
};
