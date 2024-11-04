import React from "react";
import cl from "./MainPage.module.css";

const MainPage = () => {
    return (
        <section className={cl.mainPageHead}>
            <div className={cl.container}>
                <h1 className={cl.title}>Сервис бронирования коворкингов</h1>
                <p className={cl.subtitle}>
                    Система бронирования, которая позволяет легко резервировать
                    места, избегая наложений, а также автоматически исключать
                    нецелевое бронирование
                </p>
            </div>
        </section>
    );
};

export default MainPage;
