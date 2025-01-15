export const getCoworkingSpaces = (
    section,
    {
        coworkingSpacesToday,
        coworkingSpacesTomorrow,
        coworkingSpacesWeek,
        coworkingSpacesMonth,
    }
) => {
    switch (section) {
        case "Сегодня":
            return coworkingSpacesToday;
        case "Завтра":
            return coworkingSpacesTomorrow;
        case "На этой неделе":
            return coworkingSpacesWeek;
        case "В ближайший месяц":
            return coworkingSpacesMonth;
        default:
            return [];
    }
};
export const getNotCoworkingSpaces = (section) => {
    switch (section) {
        case "Сегодня":
            return "У вас нет бронирований на сегодня.";
        case "Завтра":
            return "У вас нет бронирований на завтра.";
        case "На этой неделе":
            return "У вас нет бронирований на этой неделе.";
        case "В ближайший месяц":
            return "У вас нет бронирований в ближайший месяц.";
        default:
            return [];
    }
};
