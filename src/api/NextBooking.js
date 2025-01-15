import { host } from "./HostConst";

export function getNextBooking(authToken, setNextBooking, setHasNewNotifications) {
    return () => {
        fetch(`${host}/api/main/bookings/next-booking`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setNextBooking(data);
                if (data.hasUpcomingBooking && data.minutesUntilStart < 15) {
                    setHasNewNotifications(true);
                }
            })
            .catch((err) => {
                console.error("Error fetching next booking:", err);
            });
    };
}