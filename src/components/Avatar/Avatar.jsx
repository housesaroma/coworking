import React from "react";
import cl from "./Avatar.module.css";

const Avatar = ({ src }) => {
    
    return (
        <div className={cl.card}>
            <img src={src} alt="Card Background" className={cl.image} />
            <div className={cl.overlay}>
                <button className={cl.button}>Заменить фото</button>
            </div>
        </div>
    );
};

export default Avatar;
