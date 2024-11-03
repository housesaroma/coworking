import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../Button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth");
    };
    return (
        <div className="navbar">
            <div className="navbar__links">
                <MyButton onClick={logout}>Выйти</MyButton>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;
