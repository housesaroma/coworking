import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import avatar from "../../assets/icons/header/Avatar.jpg";
import notification from "../../assets/icons/header/IconRingNotification.svg";
import MyButton from "../UI/Button/MyButton";
import cl from "./Header.module.css";

const Header = ({ title, showIcons }) => {
    const [redirectToBooking, setRedirectToBooking] = useState(false);
    const [redirectToMain, setRedirectToMain] = useState(false);
    const [redirectToScanner, setRedirectToScanner] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let timer;
        if (showNotifications) {
            timer = setTimeout(() => {
                setShowNotifications(false);
            }, 5000); // Hide after 5 seconds
        }
        return () => clearTimeout(timer); // Clear timer on cleanup
    }, [showNotifications]);

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
        setShowNotifications((prev) => !prev);
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
                    <a href onClick={handleMainRedirect} className={cl.logo}>
                        B.ERP
                    </a>
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
                        <p className={cl.notificationText}>
                            У вас забронирован коворкинг через 15 минут,
                            отсканируйте qr-код на входной двери для входа в
                            аудиторию
                        </p>
                        <div className={cl.btn}>
                            <MyButton onClick={handleScannerRedirect}>
                                Перейти к сканированию QR-кода
                            </MyButton>
                        </div>
                    </div>
                    <div className={cl.notificationItem}>
                        <p className={cl.notificationText}>
                            У вас забронирован коворкинг через 15 минут,
                            отсканируйте qr-код на входной двери для входа в
                            аудиторию
                        </p>
                        <div className={cl.btn}>
                            <MyButton onClick={handleScannerRedirect}>
                                Перейти к сканированию QR-кода
                            </MyButton>
                        </div>
                    </div>
                    {/* Добавьте дополнительные уведомления по необходимости */}
                </div>
            )}
        </header>
    );
};

export default Header;
