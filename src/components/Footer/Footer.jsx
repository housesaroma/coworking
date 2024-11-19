import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import cl from "./Footer.module.css";

const Footer = () => {
    const [redirectToBooking, setRedirectToBooking] = useState(false);
    const [redirectToMain, setRedirectToMain] = useState(false);
    const [title, setTitle] = useState("");
    const location = useLocation();

    if (redirectToBooking) {
        return <Navigate to="/booking" state={{ title }} />;
    }

    const handleClick = (newTitle) => {
        if (location.pathname === "/booking") {
            setTitle(newTitle);
        } else {
            setTitle(newTitle);
            window.scrollTo(0, 0);
            setRedirectToBooking(true);
        }
    };

    const handleMainRedirect = () => {
        if (location.pathname !== "/main") {
            window.scrollTo(0, 0);
            setRedirectToMain(true);
        }
    };

    if (redirectToMain) {
        return <Navigate to="/main" />;
    }

    return (
        <footer className={cl.footer}>
            <nav className={cl.navigation}>
                <ul className="list">
                    <li>
                        <a
                            className={cl.link}
                            href
                            onClick={handleMainRedirect}
                        >
                            Главная
                        </a>
                    </li>
                    <li>
                        <a
                            className={cl.link}
                            href
                            onClick={() => handleClick("Мои бронирования")}
                        >
                            Мои бронирования
                        </a>
                    </li>
                    <li>
                        <a
                            className={cl.link}
                            href
                            onClick={() => handleClick("Личные данные")}
                        >
                            Личные данные
                        </a>
                    </li>
                    <li>
                        <a
                            className={cl.link}
                            href
                            onClick={() => handleClick("История бронирования")}
                        >
                            История бронирования
                        </a>
                    </li>
                </ul>
            </nav>
            <hr />
            <div className={cl.container}>
                <div className={cl.copyright}>© 2024 Компания Брусника</div>
                <div className={cl.phone}>+7 (343) 317-25-79</div>
                <div className={cl.email}>brusnika@gmail.com</div>
            </div>
        </footer>
    );
};

export default Footer;
