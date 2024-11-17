import React, { useEffect, useState } from "react";
import {
    generateCapacityOptions,
    generateDateOptions,
    generateTimeOptions,
} from "../../utils/generateOptions";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import MySelect from "../UI/Select/MySelect";
import cl from "./BookingFilter.module.css";

const BookingFilter = ({ maxCapacity, title }) => {
    const [data, setData] = useState();
    const [time, setTime] = useState();
    const [capacity, setCapacity] = useState();

    const [dataOptions, setDataOptions] = useState([]);
    const [timeOptions, setTimeOptions] = useState([]);
    const [capacityOptions, setCapacityOptions] = useState([]);

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const generatedDataOptions = generateDateOptions();
        const generatedTimeOptions = generateTimeOptions();
        const generatedCapacityOptions = generateCapacityOptions(maxCapacity);

        setDataOptions(generatedDataOptions);
        setTimeOptions(generatedTimeOptions);
        setCapacityOptions(generatedCapacityOptions);

        // Установите первое значение по умолчанию
        if (generatedDataOptions.length > 0)
            setData(generatedDataOptions[0].value);
        if (generatedTimeOptions.length > 0)
            setTime(generatedTimeOptions[0].value);
        if (generatedCapacityOptions.length > 0)
            setCapacity(generatedCapacityOptions[0].value);
    }, [maxCapacity]);

    const handleBookingClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleConfirmBooking = () => {
        // Логика подтверждения бронирования
        setModalVisible(false);
    };

    return (
        <div className={cl.filter}>
            <div className={cl.left}>
                <div className={cl.container}>
                    <p className={cl.title}>Дата</p>
                    <MySelect
                        value={data}
                        onChange={(value) => {
                            setData(value);
                        }}
                        defaultValue="Выберите дату"
                        options={dataOptions}
                    />
                </div>

                <div className={cl.container}>
                    <p className={cl.title}>Время</p>
                    <MySelect
                        value={time}
                        onChange={(value) => {
                            setTime(value);
                        }}
                        defaultValue="Выберите время"
                        options={timeOptions}
                    />
                </div>

                <div className={cl.container}>
                    <p className={cl.title}>Вместимость</p>
                    <MySelect
                        value={capacity}
                        onChange={(value) => {
                            setCapacity(value);
                        }}
                        defaultValue="Кол-во человек"
                        options={capacityOptions}
                    />
                </div>
            </div>
            <MyButton onClick={handleBookingClick}>Забронировать</MyButton>
            <MyModal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onConfirm={handleConfirmBooking}
                data={data}
                time={time}
                capacity={capacity}
                title={title}
            ></MyModal>
        </div>
    );
};

export default BookingFilter;
