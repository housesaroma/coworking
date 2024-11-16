import React, { useState } from "react";
import cl from "./CoworkingCard.module.css";
import { Navigate } from "react-router-dom";

const CoworkingCard = ({
    src,
    title,
    subtitle,
    description,
    places,
    images,
}) => {
    const [redirectToDetail, setRedirectToDetail] = useState(false);

    if (redirectToDetail) {
        return (
            <Navigate
                to="/detail"
                state={{ src, title, subtitle, description, images, places }}
            />
        );
    }

    const handleClick = (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        setRedirectToDetail(true);
    };

    return (
        <div className={cl.card}>
            <img src={src} alt="Card Background" className={cl.image} />
            <div className={cl.overlay}>
                <h3 className={cl.title}>{title}</h3>
                <p className={cl.subtitle}>{subtitle}</p>
                <button
                    className={cl.button}
                    onClick={handleClick}
                >
                    Подробнее
                </button>
            </div>
        </div>
    );
};

export default CoworkingCard;
