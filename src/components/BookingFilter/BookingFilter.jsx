import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CreateBooking } from "../../api/CreateBooking";
import { reformatDateTime } from "../../utils/format";
import {
    generateCapacityOptions,
    generateDateOptions,
    generateTimeOptions,
    generateTimeOptionsToday,
} from "../../utils/generateOptions";
import { AuthContext } from "../context";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import MySelect from "../UI/Select/MySelect";
import cl from "./BookingFilter.module.css";

const BookingFilter = ({ maxCapacity, title, id }) => {
    const [data, setData] = useState();
    const [time, setTime] = useState();
    const [capacity, setCapacity] = useState();

    const [dataOptions, setDataOptions] = useState([]);
    const [timeOptions, setTimeOptions] = useState([]);
    const [capacityOptions, setCapacityOptions] = useState([]);

    const [isModalVisible, setModalVisible] = useState(false);
    const { authToken } = useContext(AuthContext);

    const [redirectToBooking, setRedirectToBooking] = useState(false);

    const today = new Date();
    const currentHour = today.getHours();

    useEffect(() => {
        const generatedDataOptions = generateDateOptions();
        const generatedTimeOptions =
            currentHour < 20
                ? generateTimeOptionsToday()
                : generateTimeOptions();
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
    }, [currentHour, maxCapacity]);

    if (redirectToBooking) {
        return <Navigate to="/booking" state={"Мои бронирования"} />;
    }

    const updateTimeOptions = (selectedDate) => {
        const times =
            selectedDate === dataOptions[0]?.name && currentHour < 20
                ? generateTimeOptionsToday()
                : generateTimeOptions();
        setTimeOptions(times);
        if (times.length > 0) setTime(times[0].value);
    };

    const handleDateChange = (value) => {
        setData(value);
        updateTimeOptions(value);
    };

    const handleBookingClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleConfirmBooking = async () => {
        const { dateTimeStart, dateTimeEnd } = reformatDateTime(data, time);

        try {
            await CreateBooking(
                authToken,
                id,
                dateTimeStart,
                dateTimeEnd,
                capacity
            );
            setModalVisible(false);
            setRedirectToBooking(true);
        } catch (error) {
            console.error("Error creating booking:", error);
        }
    };

    return (
        <div className={cl.filter}>
            <div className={cl.left}>
                <div className={cl.container}>
                    <p className={cl.title}>Дата</p>
                    <MySelect
                        value={data}
                        onChange={handleDateChange}
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
                id={id}
            ></MyModal>
        </div>
    );
};

export default BookingFilter;
