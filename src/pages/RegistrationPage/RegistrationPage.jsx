import React, { useContext, useState } from "react";
import Service from "../../api/Service.js";
import { AuthContext } from "../../components/context";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyInput from "../../components/UI/Input/MyInput";
import cl from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const register = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await Service.registerUser(
                formData.email,
                formData.password,
                `${formData.lastName} ${formData.firstName} ${formData.middleName}`
            );
            if (response.status === 200) {
                setIsAuth(true);
                localStorage.setItem("auth", "true");
                alert("Registration successful!");
            }
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed. Please try again.");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

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
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                        <MyInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <MyButton>Далее</MyButton>
                    </form>
                    <p className={cl.note}>
                        Сервис доступен только для студентов и сотрудников УрФУ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
