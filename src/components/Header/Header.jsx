import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getNextBooking } from "../../api/NextBooking";
import avatar from "../../assets/icons/header/Avatar.jpg";
import notification from "../../assets/icons/header/IconRingNotification.svg";
import { AuthContext } from "../context";
import MyButton from "../UI/Button/MyButton";
import cl from "./Header.module.css";

const Header = ({ title, showIcons }) => {
    const [redirectToBooking, setRedirectToBooking] = useState(false);
    const [redirectToMain, setRedirectToMain] = useState(false);
    const [redirectToScanner, setRedirectToScanner] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [nextBooking, setNextBooking] = useState(null);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const location = useLocation();

    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchNextBooking = getNextBooking(
            authToken,
            setNextBooking,
            setHasNewNotifications
        );

        fetchNextBooking();
        const intervalId = setInterval(fetchNextBooking, 30000);
        return () => clearInterval(intervalId);
    }, [authToken]);

    useEffect(() => {
        let timer;
        if (showNotifications) {
            timer = setTimeout(() => {
                setShowNotifications(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showNotifications]);

    useEffect(() => {
        let lastScrollTop = 0;
        const headerHeight = document.querySelector(
            `.${cl.header}`
        ).offsetHeight; // Получаем высоту статичного заголовка
        const handleScroll = () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollTop < headerHeight) {
                setIsHeaderVisible(false); // Скролл вниз
            }
            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                setIsHeaderVisible(false); // Скролл вниз
            } else {
                setIsHeaderVisible(true); // Скролл вверх
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        if (!showNotifications) {
            setHasNewNotifications(false);
        }
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
        <div>
            {" "}
            <header className={cl.header}></header>
            <header
                className={`${cl.floatingHeader} ${
                    isHeaderVisible ? "" : cl.hidden
                }`}
            >
                <div className={cl.container}>
                    {Left()}

                    {showIcons && Right()}
                </div>

                {showNotifications && Notifications()}
            </header>
        </div>
    );

    function Left() {
        return (
            <div className={cl.left}>
                <a href onClick={handleMainRedirect} className={cl.logo}>
                    B.ERP
                </a>
                <div className={cl.title}>Бронирование коворкингов</div>
                <div className={cl.subtitle}>{title}</div>
            </div>
        );
    }

    function Right() {
        return (
            <div className={cl.right}>
                <div className={cl.notificationWrapper}>
                    <a href onClick={toggleNotifications}>
                        <img
                            className={cl.notification}
                            src={notification}
                            alt="notification"
                        />
                        {hasNewNotifications && (
                            <span className={cl.notificationBadge}></span>
                        )}
                    </a>
                </div>
                <a href onClick={handleBookRedirect}>
                    <img
                        className={cl.avatar}
                        src={avatar}
                        alt="avatar"
                        style={{ borderRadius: "50%" }}
                    />
                </a>
            </div>
        );
    }

    function Notifications() {
        return (
            <div className={cl.notificationsPopup}>
                {nextBooking &&
                nextBooking.hasUpcomingBooking &&
                nextBooking.minutesUntilStart < 15 ? (
                    <div className={cl.notificationItem}>
                        <p className={cl.notificationText}>
                            У вас скоро начинается бронирование (через{" "}
                            {nextBooking.minutesUntilStart} минут).
                        </p>
                        <div className={cl.btn}>
                            <MyButton onClick={handleScannerRedirect}>
                                Перейти к сканированию
                            </MyButton>
                        </div>
                    </div>
                ) : (
                    <div className={cl.notificationItem}>
                        <p className={cl.notificationText}>Уведомлений нет</p>
                    </div>
                )}
            </div>
        );
    }
};

export default Header;
