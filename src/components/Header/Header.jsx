import React from "react";
import avatar from "../../assets/header/Avatar.jpg";
import notification from "../../assets/header/IconRingNotification.svg";
import cl from "./Header.module.css";

const Header = ({ title }) => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.left}>
                    <div className={cl.logo}>B.ERP</div>
                    <div className={cl.title}>Бронирование коворкингов</div>
                    <div className={cl.subtitle}>{title}</div>
                </div>

                <div className={cl.right}>
                    <a href="!#">
                        <img
                            className={cl.notification}
                            src={notification}
                            alt="notification"
                        />
                    </a>
                    <a href="!#">
                        <img
                            className={cl.avatar}
                            src={avatar}
                            alt="avatar"
                            style={{ borderRadius: "50%" }}
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
