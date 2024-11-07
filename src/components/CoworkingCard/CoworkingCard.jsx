import React from "react";
import cl from "./CoworkingCard.module.css";

const CoworkingCard = ({ src, title, subtitle }) => {
    
    return (
        <div className={cl.card}>
            <img src={src} alt="Card Background" className={cl.image} />
            <div className={cl.overlay}>
                <h3 className={cl.title}>{title}</h3>
                <p className={cl.subtitle}>{subtitle}</p>
                <button className={cl.button}>Подробнее</button>
            </div>
        </div>
    );
};

export default CoworkingCard;
