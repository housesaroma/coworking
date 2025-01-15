import React, { useContext, useEffect, useState } from "react";
import { useUserInfo } from "../../api/PersonalData";
import { ChangePersonalData } from "../../api/ChangePersonalData";
import { AuthContext } from "../../components/context";
import Avatar from "../Avatar/Avatar";
import MyField from "../UI/Field/MyField";
import Loader from "../UI/Loader/Loader";
import MyRadioButton from "../UI/RadioButton/MyRadioButton";
import cl from "./PersonalData.module.css";

const PersonalData = () => {
    const { authToken } = useContext(AuthContext);
    const [data, setData] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        email: "",
        photoUrl: null,
    });
    const { fetchUserInfo, isLoading } = useUserInfo(authToken, setData);

    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        fetchUserInfo();
    }, [authToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
            const newData = { ...prevData, [name]: value };
            setHasChanges(JSON.stringify(newData) !== JSON.stringify(prevData));
            return newData;
        });
    };

    const handleSave = async () => {
        if (hasChanges) {
            try {
                // Формируем полное имя из компонентов
                const fullName =
                    `${data.lastName} ${data.firstName} ${data.middleName}`.trim();

                // Вызываем функцию изменения данных
                await ChangePersonalData(
                    authToken,
                    fullName,
                    data.email, // используем email как username
                );

                console.log("Changes saved successfully!");
                setHasChanges(false);
            } catch (error) {
                console.error("Error saving changes:", error);
            }
        }
    };

    return (
        <div>
            <h1 className={cl.title}>Личные данные</h1>
            <div className={cl.loader}>{isLoading && <Loader />}</div>
            {!isLoading && (
                <div className={cl.form}>
                    <div className={cl.formGroup}>
                        {Object.entries(data)
                            .filter(([key]) => !["photoUrl"].includes(key)) // Исключаем photoUrl из полей ввода
                            .map(([key, value]) => (
                                <MyField
                                    key={key}
                                    // type={
                                    //     key === "password" ? "password" : "text"
                                    // }
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                />
                            ))}
                        <div className={cl.save}>
                            <MyRadioButton
                                isSelected={hasChanges}
                                onClick={handleSave}
                            >
                                Сохранить
                            </MyRadioButton>
                        </div>
                    </div>
                    <div className={cl.avatar}>
                        <Avatar key={1} src={data.photoUrl} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalData;
