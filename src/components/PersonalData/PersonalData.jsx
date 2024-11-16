import React, { useState } from "react";
import avatar from "../../assets/obabkov.jpg";
import Avatar from "../Avatar/Avatar";
import MyField from "../UI/Field/MyField";
import MyRadioButton from "../UI/RadioButton/MyRadioButton";
import cl from "./PersonalData.module.css";

const PersonalData = () => {
    const [data, setData] = useState({
        lastName: "Иванов",
        firstName: "Иван",
        middleName: "Иванович",
        email: "Ivanov_II@urfu.me",
        password: "qwerty123",
    });

    const [hasChanges, setHasChanges] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
            const newData = { ...prevData, [name]: value };
            setHasChanges(JSON.stringify(newData) !== JSON.stringify(prevData));
            return newData;
        });
    };

    const handleSave = () => {
        if (hasChanges) {
            console.log("Changes saved!");
            setHasChanges(false);
        }
    };

    return (
        <div>
            <h1 className={cl.title}>Личные данные</h1>
            <div className={cl.form}>
                <div className={cl.formGroup}>
                    {Object.entries(data).map(([key, value]) => (
                        <MyField
                            key={key}
                            type={key === "password" ? "password" : "text"}
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
                    <Avatar key={1} src={avatar} />
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
