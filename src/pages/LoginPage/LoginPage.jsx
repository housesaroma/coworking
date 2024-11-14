import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/context";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyInput from "../../components/UI/Input/MyInput";
import cl from "./LoginPage.module.css";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [redirectToRegister, setRedirectToRegister] = useState(false);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    if (redirectToRegister) {
        return <Navigate to="/registration" />;
    }

    return (
        <div className={cl.loginPage}>
            <Header title="Вход" showIcons={false}/>
            <div className={cl.background}>
                <div className={cl.container}>
                    <h1 className={cl.title}>Вход</h1>
                    <form onSubmit={login} className={cl.form}>
                        <MyInput
                            type="email"
                            placeholder="Электронная почта @urfu.me"
                            title="Только для сотрудников и студентов УрФУ"
                        />
                        <div className={cl.passwordContainer}>
                            <MyInput
                                type={showPassword ? "text" : "password"}
                                placeholder="Пароль"
                            />
                            <span
                                className={cl.eyeIcon}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        <MyButton>Войти</MyButton>
                    </form>
                    <p className={cl.note}>
                        Ещё нет аккаунта? -{" "}
                        <span
                            className={cl.link}
                            onClick={() => setRedirectToRegister(true)}
                        >
                            Зарегистрироваться
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
