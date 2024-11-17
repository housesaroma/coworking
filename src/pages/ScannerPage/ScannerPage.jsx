import React from "react";
import cl from "./ScannerPage.module.css";
import Header from "../../components/Header/Header";
const ScannerPage = () => {
    return (
        <div className={cl.scanner}>
            <Header title="QR-сканер" showIcons={true} />
            <div className={cl.background}></div>
        </div>
    );
};

export default ScannerPage;
