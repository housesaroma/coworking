import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/context";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import MyInput from "../../components/UI/Input/MyInput";
import cl from "./RegistrationPage.module.css";

const RegistrationPage = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
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
                    <form onSubmit={login} className={cl.form}>
                        <MyInput type="text" placeholder="Фамилия" />
                        <MyInput type="text" placeholder="Имя" />
                        <MyInput type="text" placeholder="Отчество" />
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
                        <MyInput
                            type="password"
                            placeholder="Повторите пароль"
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