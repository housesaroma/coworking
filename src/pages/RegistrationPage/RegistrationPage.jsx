import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRegister } from "../../api/register.js";
import visibility from "../../assets/icons/visibility.svg";
import visibility_off from "../../assets/icons/visibility_off.svg";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyInput from "../../components/UI/Input/MyInput";
import Loader from "../../components/UI/Loader/Loader.jsx";
import cl from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const { register, isLoading } = useRegister(
        formData,
        setErrorMessage,
        setSuccessMessage
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={cl.registrationPage}>
            <Header title="Регистрация" showIcons={false} />
            <div className={cl.background}>
                <div className={cl.container}>
                    <h1 className={cl.title}>Регистрация</h1>
                    <form onSubmit={register} className={cl.form}>
                        <MyInput
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <MyInput
                            type="text"
                            name="firstName"
                            placeholder="Имя"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <MyInput
                            type="text"
                            name="middleName"
                            placeholder="Отчество"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
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
                                <img
                                    src={
                                        showPassword
                                            ? visibility_off
                                            : visibility
                                    }
                                    alt={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                />
                            </span>
                        </div>
                        <MyInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {isLoading && <Loader />}
                        {errorMessage && !isLoading && (
                            <div className={cl.error}>{errorMessage}</div>
                        )}
                        {successMessage && !isLoading && (
                            <div className={cl.success}>{successMessage}</div>
                        )}
                        <MyButton disabled={isLoading}>Далее</MyButton>
                    </form>
                    <p className={cl.note}>
                        Уже есть аккаунт? -{" "}
                        <span
                            className={cl.link}
                            onClick={() => setRedirectToLogin(true)}
                        >
                            Войти
                        </span>
                    </p>
                    <p className={cl.subnote}>
                        Сервис доступен только для студентов и сотрудников УрФУ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
