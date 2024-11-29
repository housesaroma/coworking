import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../components/context";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyBookings from "../../components/MyBookings/MyBookings";
import MyHistory from "../../components/MyHistory/MyHistory";
import PersonalData from "../../components/PersonalData/PersonalData";
import MyButton from "../../components/UI/Button/MyButton";
import MyRadioButton from "../../components/UI/RadioButton/MyRadioButton";
import cl from "./BookingPage.module.css";

export const BookingPage = () => {
    const location = useLocation();
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    const [title, setTitle] = useState(
        location?.state?.title || "Мои бронирования"
    );

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
                    onClick={() => setTitle("История бронирования")}
                    isSelected={title === "История бронирования"}
                >
                    История
                </MyRadioButton>
            </div>

            {title === "Мои бронирования" && <MyBookings />}
            {title === "Личные данные" && <PersonalData />}
            {title === "История бронирования" && <MyHistory />}

            <div className={cl.exitBtn}>
                <MyButton onClick={logout}>Выйти</MyButton>
            </div>

            <Footer />
        </div>
    );
};
