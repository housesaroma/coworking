import React from "react";
import MyButton from "../Button/MyButton";
import cl from "./MyModal.module.css";

const MyModal = ({
    isVisible,
    onClose,
    onConfirm,
    data,
    time,
    capacity,
    title,
}) => {
    if (!isVisible) return null;

    const formatTimeRange = (hour) => {
        const startHour = parseInt(hour, 10);
        const endHour = (startHour + 1) % 24; // Ensure it wraps around after 23
        return `${startHour}:00-${endHour}:00`;
    };

    return (
        <div className={cl.modalOverlay}>
            <div className={cl.modalContent}>
                <h2 className={cl.title}>Подтверждение бронирования</h2>

                <div className={cl.block}>
                    <p className={cl.text}>
                        Вы планируете забронировать коворкинг
                    </p>
                    <div className={cl.field}>{title}</div>
                </div>
                <div className={cl.block}>
                    <p className={cl.text}>Выбранная дата</p>
                    <div className={cl.field}>{data}</div>
                </div>

                <div className={cl.block}>
                    <p className={cl.text}>Временной промежуток</p>
                    <div className={cl.field}>{formatTimeRange(time)}</div>
                </div>

                <div className={cl.block}>
                    <p className={cl.text}>Количество необходимых мест</p>
                    <div className={cl.field}>{capacity}</div>
                </div>

                <div className={cl.modalActions}>
                    <MyButton onClick={onClose}>Отменить</MyButton>
                    <MyButton onClick={onConfirm}>Подтвердить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default MyModal;
