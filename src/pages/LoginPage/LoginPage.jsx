import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../components/context";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyInput from "../../components/UI/Input/MyInput";
import { tryLogin } from "../../api/login.js";
import cl from "./LoginPage.module.css";

const LoginPage = () => {
    const { setIsAuth, setAuthToken } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);       

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const login = tryLogin(formData, setIsAuth, setErrorMessage, setAuthToken);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    if (redirectToRegister) {
        return <Navigate to="/registration" />;
    }

    return (
        <div className={cl.loginPage}>
            <Header title="Вход" showIcons={false} />
            <div className={cl.background}>
                <div className={cl.container}>
                    <h1 className={cl.title}>Вход</h1>
                    <form onSubmit={login} className={cl.form}>
                        <MyInput
                            type="email"
                            name="email"
                            placeholder="Электронная почта @urfu.me"
                            title="Только для сотрудников и студентов УрФУ"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className={cl.passwordContainer}>
                            <MyInput
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span
                                className={cl.eyeIcon}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        {errorMessage && (
                            <div className={cl.error}>{errorMessage}</div>
                        )}
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
