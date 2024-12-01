// CoworkingDetail.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import geo from "../../assets/icons/IconGeo.svg";
import profile from "../../assets/icons/IconProfile.svg";
import watch from "../../assets/icons/IconWatchStroked.svg";
import arrow from "../../assets/icons/arrow.svg";
import BookingFilter from "../../components/BookingFilter/BookingFilter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import cl from "./CoworkingDetailPage.module.css";

const CoworkingDetail = () => {
    const location = useLocation();
    const [expandedSection, setExpandedSection] = useState(null);

    const { src, title, subtitle, description, places, images, id } =
        location.state || {};

    if (!title && !src && !subtitle && !description && !places && !images && !id) {
        return <div className={cl.detail}>Нет данных для отображения.</div>;
    }

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className={cl.detail}>
            <Header title={"Карточка коворкинга"} showIcons={true}></Header>
            <h1 className={cl.title}>{title}</h1>
            <div className={cl.imageContainer}>
                <img src={src} className={cl.img} alt="Coworking" />
            </div>
            <div className={cl.description}>
                <div className={cl.geo}>
                    <img src={geo} alt="geo" width={"30px"} height={"30px"} />
                    <p>Адрес: Ленина, 66</p>
                </div>
                <div className={cl.watch}>
                    <img
                        src={watch}
                        alt="watch"
                        width={"30px"}
                        height={"30px"}
                    />
                    <p>График: пн-пт, с 7.00 до 19.00</p>
                </div>
                <div className={cl.profile}>
                    <img
                        src={profile}
                        alt="profile"
                        width={"30px"}
                        height={"30px"}
                    />
                    <p>Вместимость: до {places} человек</p>
                </div>
            </div>
            <div className={cl.accordion}>
                {["Описание"].map((section, index) => (
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
                            <div className={cl.accordionDescription}>
                                {description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <BookingFilter maxCapacity={places} title={title} id={id}/>
            <Footer />
        </div>
    );
};

export default CoworkingDetail;
