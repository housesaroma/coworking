import React, { useContext, useState } from "react";
import card1 from "../../assets/cards/card1.jpg";
import card2 from "../../assets/cards/card2.jpg";
import card3 from "../../assets/cards/card3.jpg";
import { AuthContext } from "../../components/context";
import CoworkingCard from "../../components/CoworkingCard/CoworkingCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyRadioButton from "../../components/UI/RadioButton/MyRadioButton";
import cl from "./BookingPage.module.css";
import arrow from "../../assets/icons/arrow.svg";

export const BookingPage = () => {
    const { setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };

    const [title, setTitle] = useState("Мои бронирования");
    const [expandedSection, setExpandedSection] = useState(null);

    const coworkingSpaces = [
        { src: card1, title: "Территория идей", places: 15 },
        { src: card2, title: "Территория столов", places: 30 },
        { src: card3, title: "Территория светильников", places: 25 },
    ];

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

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
            <h1 className={cl.title}>{title}</h1>
            <div className={cl.accordion}>
                {[
                    "Сегодня",
                    "Завтра",
                    "На этой неделе",
                    "В ближайший месяц",
                ].map((section, index) => (
                    <div
                        key={index}
                        className={cl.accordionItem}
                        onClick={() => toggleSection(section)}
                    >
                        <div className={cl.accordionHeader}>
                            {section}
                            <img
                                src={arrow}
                                alt="arrow"
                                width={"20px"}
                                height={"20px"}
                                className={cl.arrow}
                            ></img>
                        </div>
                        {expandedSection === section && (
                            <div className={cl.cardContainer}>
                                {coworkingSpaces.map((space, index) => (
                                    <CoworkingCard
                                        key={index}
                                        src={space.src}
                                        title={space.title}
                                        subtitle={`Свободных мест осталось: ${space.places}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={cl.exitBtn}>
                <MyButton onClick={logout}>Выйти</MyButton>
            </div>

            <Footer />
        </div>
    );
};
