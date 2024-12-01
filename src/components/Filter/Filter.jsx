import React, { useEffect, useState } from "react";
import {
    generateCapacityOptions,
    generateDateOptions,
    generateTimeOptions,
} from "../../utils/generateOptions";
import MyButton from "../UI/Button/MyButton";
import MySelect from "../UI/Select/MySelect";
import cl from "./Filter.module.css";

const BookingFilter = ({ onFilterChange  }) => {
    // const [address, setAddress] = useState();
    const [data, setData] = useState();
    const [time, setTime] = useState();
    const [capacity, setCapacity] = useState();

    const [dataOptions, setDataOptions] = useState([]);
    const [timeOptions, setTimeOptions] = useState([]);
    const [capacityOptions, setCapacityOptions] = useState([]);

    useEffect(() => {
        const dates = generateDateOptions();
        const times = generateTimeOptions();
        const capacities = generateCapacityOptions(30);

        setDataOptions(dates);
        setTimeOptions(times);
        setCapacityOptions(capacities);

        // Set initial state to the first option if available
        if (dates.length > 0) setData(dates[0].value);
        if (times.length > 0) setTime(times[0].value);
        if (capacities.length > 0) setCapacity(capacities[0].value);
    }, []);

    const handleSearch = () => {
        if (onFilterChange ) {
            onFilterChange ({capacity: capacity, date: data, time: time});
        }
    };

    return (
        <div className={cl.filter}>
            <div className={cl.left}>
                {/* <div className={cl.container}>
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
                </div> */}

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
            <MyButton onClick={handleSearch}>Поиск</MyButton>
        </div>
    );
};

export default BookingFilter;
