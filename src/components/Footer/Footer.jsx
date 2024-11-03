import React from "react";
import cl from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <nav className={cl.navigation}>
                <ul className="list">
                    <li>
                        <a className={cl.link} href="!#">
                            Главная
                        </a>
                    </li>
                    <li>
                        <a className={cl.link} href="!#">
                            Мои бронирования
                        </a>
                    </li>
                    <li>
                        <a className={cl.link} href="!#">
                            Личные данные
                        </a>
                    </li>
                    <li>
                        <a className={cl.link} href="!#">
                            История бронирований
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
