export const firstDateOption = () => {
    return generateDateOptions()[0].value;
};

export const firstTimeOption = () => {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 20) {
        return generateTimeOptionsToday()[0].value;
    }
    return generateTimeOptions()[0].value;
};

export const generateDateOptions = () => {
    const options = [];
    const today = new Date();
    const currentHour = today.getHours();

    // Determine the starting day: 0 if before 20:00, otherwise 1
    const startDay = currentHour < 20 ? 0 : 1;

    // Generate 10 days starting from the determined start day
    for (let i = startDay; i < startDay + 10; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateString = date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        options.push({ value: dateString, name: dateString });
    }

    return options;
};

export const generateTimeOptionsToday = () => {
    const options = [];
    const startHour = 7; // Начало с 7:00
    const endHour = 19; // До 20:00
    const currentHour = new Date().getHours();

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 15) {
            const startTime = `${hour}:${minutes.toString().padStart(2, "0")}`;
            const endTime = `${hour + 1}:${minutes
                .toString()
                .padStart(2, "0")}`;

            if (
                hour > currentHour ||
                (hour === currentHour && minutes > new Date().getMinutes())
            ) {
                const timeString = `${startTime} - ${endTime}`;
                options.push({ value: startTime, name: timeString });
            }
        }
    }

    return options;
};

export const generateTimeOptions = () => {
    const options = [];
    const startHour = 7; // Начало с 7:00
    const endHour = 19; // До 20:00

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 15) {
            const startTime = `${hour}:${minutes.toString().padStart(2, "0")}`;
            const endTime = `${hour + 1}:${minutes
                .toString()
                .padStart(2, "0")}`;

            const timeString = `${startTime} - ${endTime}`;
            options.push({ value: startTime, name: timeString });
        }
    }

    return options;
};

export const generateCapacityOptions = (maxCapacity) => {
    const options = [];

    for (let i = 1; i <= maxCapacity; i++) {
        const capacityString = `${i} чел.`;
        options.push({ value: i, name: capacityString });
    }

    return options;
};
