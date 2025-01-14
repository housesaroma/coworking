import React, { useState, useRef, useContext } from "react"; // Добавляем useContext
import { AuthContext } from "../../components/context"; // Импортируем AuthContext
import cl from "./Avatar.module.css";
import { uploadPhoto } from "../../api/ChangeAvatar";
import avatar from "../../../src/assets/obabkov.jpg";

const Avatar = ({ src, onPhotoUpdate }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const fileInputRef = useRef(null);
    const { authToken } = useContext(AuthContext); // Получаем authToken

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // Показываем превью файла
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);

            // Отправляем файл на сервер
            await uploadPhoto(file, onPhotoUpdate, authToken);
        }
    };

    return (
        <div className={cl.card}>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt="Card Background"
                    className={cl.image}
                />
            ) : (
                <img src={avatar} alt="Card Background" className={cl.image} />
            )}

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
