import React, { useEffect, useState } from "react";
import {
    generateCapacityOptions,
    generateDateOptions,
    generateTimeOptions,
} from "../../utils/generateOptions";
import MyButton from "../UI/Button/MyButton";
import MySelect from "../UI/Select/MySelect";
import cl from "./Filter.module.css";

const Filter = () => {
    const [address, setAddress] = useState();
    const [data, setData] = useState();
    const [time, setTime] = useState();
    const [capacity, setCapacity] = useState();

    const [dataOptions, setDataOptions] = useState([]);
    const [timeOptions, setTimeOptions] = useState([]);
    const [capacityOptions, setCapacityOptions] = useState([]);

    useEffect(() => {
        setDataOptions(generateDateOptions());
        setTimeOptions(generateTimeOptions());
        setCapacityOptions(generateCapacityOptions());
    }, []);

    return (
        <div className={cl.filter}>
            <div className={cl.left}>
                <div className={cl.container}>
                    <p className={cl.title}>Адрес</p>
                    <MySelect
                        value={address}
                        onChange={(value) => setAddress(value)}
                        defaultValue="Выберите адрес"
                        options={[
                            { value: 67, name: "Ленина, 67" },
                            { value: 66, name: "Ленина, 66" },
                        ]}
                    />
                </div>

                <div className={cl.container}>
                    <p className={cl.title}>Дата</p>
                    <MySelect
                        value={data}
                        onChange={(value) => setData(value)}
                        defaultValue="Выберите адрес"
                        options={dataOptions}
                    />
                </div>

                <div className={cl.container}>
                    <p className={cl.title}>Время</p>
                    <MySelect
                        value={time}
                        onChange={(value) => setTime(value)}
                        defaultValue="Выберите время"
                        options={timeOptions}
                    />
                </div>

                <div className={cl.container}>
                    <p className={cl.title}>Вместимость</p>
                    <MySelect
                        value={capacity}
                        onChange={(value) => setCapacity(value)}
                        defaultValue="Кол-во человек"
                        options={capacityOptions}
                    />
                </div>
            </div>
            <MyButton>Поиск</MyButton>
        </div>
    );
};

export default Filter;
