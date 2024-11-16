export const generateDateOptions = () => {
    const options = [];
    const today = new Date();

    for (let i = 0; i <= 10; i++) {
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

export const generateTimeOptions = () => {
    const options = [];
    const startHour = 7; // Начало с 7:00
    const endHour = 20; // До 20:00

    for (let hour = startHour; hour < endHour; hour++) {
        const timeString = `${hour}:00 - ${hour + 1}:00`;
        options.push({ value: `${hour}:00`, name: timeString });
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
