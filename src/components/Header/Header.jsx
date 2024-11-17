import React, { useState } from "react";
import avatar from "../../assets/icons/header/Avatar.jpg";
import notification from "../../assets/icons/header/IconRingNotification.svg";
import cl from "./Header.module.css";
import { Navigate, useLocation } from "react-router-dom";
import MyButton from '../UI/Button/MyButton'

const Header = ({ title, showIcons }) => {
    const [redirectToBooking, setRedirectToBooking] = useState(false);
    const [redirectToMain, setRedirectToMain] = useState(false);
    const [redirectToScanner, setRedirectToScanner] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const location = useLocation();

    const handleBookRedirect = () => {
        if (location.pathname !== "/booking") {
            setRedirectToBooking(true);
        }
    };

    if (redirectToBooking) {
        return <Navigate to="/booking" />;
    }

    const handleMainRedirect = () => {
        if (location.pathname !== "/main") {
            setRedirectToMain(true);
        }
    };

    if (redirectToMain) {
        return <Navigate to="/main" />;
    }

    const toggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };

    if (redirectToScanner) {
        return <Navigate to="/scanner" />;
    }

    const handleScannerRedirect = () => {
        if (location.pathname !== "/scanner") {
            setRedirectToScanner(true);
        }
    };

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.left}>
                    <a href onClick={handleMainRedirect} className={cl.logo}>B.ERP</a>
                    <div className={cl.title}>Бронирование коворкингов</div>
                    <div className={cl.subtitle}>{title}</div>
                </div>

                {showIcons && (
                    <div className={cl.right}>
                        <a href onClick={toggleNotifications}>
                            <img
                                className={cl.notification}
                                src={notification}
                                alt="notification"
                            />
                        </a>
                        <a href onClick={handleBookRedirect}>
                            <img
                                className={cl.avatar}
                                src={avatar}
                                alt="avatar"
                                style={{ borderRadius: "50%" }}
                            />
                        </a>
                    </div>
                )}
            </div>

            {showNotifications && (
                <div className={cl.notificationsPopup}>
                    <div className={cl.notificationItem}>
                        <p>Уведомление 1</p>
                        <MyButton onClick={handleScannerRedirect}>Перейти к сканированию QR-кода</MyButton>
                    </div>
                    <div className={cl.notificationItem}>
                        <p>Уведомление 2</p>
                        <MyButton onClick={handleScannerRedirect}>Перейти к сканированию QR-кода</MyButton>
                    </div>
                    {/* Добавьте дополнительные уведомления по необходимости */}
                </div>
            )}

        </header>
    );
};

export default Header;
