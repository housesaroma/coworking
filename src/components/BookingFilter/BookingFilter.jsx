import React, { useEffect, useState } from "react";
import {
    generateCapacityOptions,
    generateDateOptions,
    generateTimeOptions,
} from "../../utils/generateOptions";
import MyButton from "../UI/Button/MyButton";
import MySelect from "../UI/Select/MySelect";
import cl from "./BookingFilter.module.css";

const BookingFilter = ({maxCapacity}) => {
    const [data, setData] = useState();
    const [time, setTime] = useState();
    const [capacity, setCapacity] = useState();

    const [dataOptions, setDataOptions] = useState([]);
    const [timeOptions, setTimeOptions] = useState([]);
    const [capacityOptions, setCapacityOptions] = useState([]);

    useEffect(() => {
        setDataOptions(generateDateOptions());
        setTimeOptions(generateTimeOptions());
        setCapacityOptions(generateCapacityOptions(maxCapacity));
    }, [maxCapacity]);

    return (
        <div className={cl.filter}>
            <div className={cl.left}>
                <div className={cl.container}>
                    <p className={cl.title}>Дата</p>
                    <MySelect
                        value={data}
                        onChange={(value) => setData(value)}
                        defaultValue="Выберите дату"
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
            <MyButton>Забронивароть</MyButton>
        </div>
    );
};

export default BookingFilter;
