import React from "react";
import cl from "./CoworkingAdvantages.module.css";

const CoworkingAdvantages = () => {
    return (
        <section className={cl.coworkingAdvantages}>
            <div className={cl.left}>
                <p className={cl.title}>
                    Бронирование <br /> рабочих мест
                </p>
                <p className={cl.subtitle}>
                    Позвольте сотрудникам самостоятельно выбирать удобные им
                    рабочие места
                </p>
            </div>
            <div className={cl.right}>
                <p className={cl.title}>
                    Подтверждение <br /> бронирований
                </p>
                <p className={cl.subtitle}>
                    Система чекина через QR-код. Бронь автоматически снимается,
                    если сотрудник не подтвердил свое присутствие на рабочем
                    месте
                </p>
            </div>
            <div className={cl.left}>
                <p className={cl.title}>
                    Доступность на <br /> всех устройствах
                </p>
                <p className={cl.subtitle}>
                    Бронируйте рабочие места через браузер, мобильное и
                    десктопное приложение
                </p>
            </div>
        </section>
    );
};

export default CoworkingAdvantages;
