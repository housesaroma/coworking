export const reformatDateTime = (dateString, timeString) => {
    const [day, month, year] = dateString.split(".");
    const [hour, minute] = timeString.split(":");
    const dateTimeStart = new Date(year, month - 1, day, hour, minute);
    const dateTimeEnd = new Date(dateTimeStart);
    dateTimeEnd.setHours(dateTimeStart.getHours() + 1);

    const formatDate = (date) => {
        const pad = (num) => num.toString().padStart(2, "0");
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
            date.getDate()
        )}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
            date.getSeconds()
        )}`;
    };

    // console.log(formatDate(dateTimeStart));
    // console.log(formatDate(dateTimeEnd));
    return {
        dateTimeStart: formatDate(dateTimeStart),
        dateTimeEnd: formatDate(dateTimeEnd),
    };
};

export const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleString('ru-RU', options);
};

export const formatTimeRange = (hour) => {
    const startHour = parseInt(hour, 10);
    const endHour = (startHour + 1) % 24; // Ensure it wraps around after 23
    return `${startHour}:00-${endHour}:00`;
};