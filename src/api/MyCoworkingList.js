import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/context";
import { host } from "./HostConst";

export const CoworkingListToday = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/todayBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};

export const CoworkingListTomorrow = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/tomorrowBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};

export const CoworkingListWeek = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/weekBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};

export const CoworkingListMonth = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/MonthBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};

export const CoworkingListFinished = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/finishedBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};

export const CoworkingListCancelled = () => {
    const [coworkings, setCoworkings] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${host}/api/main/bookings/cancelledBookings`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const updatedCoworkings = data.map((booking) => ({
                    id: booking.coworking.coworkingId,
                    title: booking.coworking.name,
                    description: booking.coworking.description,
                    src: booking.coworking.mainPhoto,
                    places: booking.coworking.totalCapacity,
                    start: booking.bookingDateStart,
                    end: booking.bookingDateEnd,
                }));
                setCoworkings(updatedCoworkings);
            })
            .catch((error) =>
                console.error("Error fetching coworkings:", error)
            );
    }, [authToken]);
    return coworkings;
};