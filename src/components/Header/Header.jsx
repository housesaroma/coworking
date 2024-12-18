import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
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
    const [loading, setLoading] = useState(true);
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    const location = useLocation();

    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchNextBooking = () => {
            fetch("http://localhost:8070/api/main/bookings/next-booking", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setNextBooking(data);
                    setLoading(false);
                    if (data.hasUpcomingBooking && data.minutesUntilStart < 15) {
                        setHasNewNotifications(true);
                    }
                })
                .catch((err) => {
                    console.error("Error fetching next booking:", err);
                    setLoading(false);
                });
        };

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
                )}
            </div>

            {showNotifications && (
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
                            <p className={cl.notificationText}>
                                Уведомлений нет
                            </p>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;