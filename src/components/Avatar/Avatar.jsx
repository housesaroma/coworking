import React, { useState, useRef } from "react";
import cl from "./Avatar.module.css";

const Avatar = ({ src }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={cl.card}>
            <img src={imageSrc} alt="Card Background" className={cl.image} />
            <div className={cl.overlay}>
                <button className={cl.button} onClick={handleButtonClick}>
                    Заменить фото
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default Avatar;