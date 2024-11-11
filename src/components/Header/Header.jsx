import React, { useContext } from "react";
import avatar from "../../assets/icons/header/Avatar.jpg";
import notification from "../../assets/icons/header/IconRingNotification.svg";
import cl from "./Header.module.css";
import MyButton from "../UI/Button/MyButton";
import { AuthContext } from "../context";

const Header = ({ title }) => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };
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
                    <a href="!#" onClick={logout}>
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
