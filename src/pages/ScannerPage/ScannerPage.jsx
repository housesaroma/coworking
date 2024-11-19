import React, { useState } from "react";
import cl from "./ScannerPage.module.css";
import Header from "../../components/Header/Header";
import { Scanner } from "@yudiel/react-qr-scanner";
const ScannerPage = () => {
    const [result, setResult] = useState("");
    return (
        <div className={cl.scanner}>
            <Header title="QR-сканер" showIcons={true} />
            <div className={cl.background}>
                <div className={cl.qrScanner}>
                    <Scanner onScan={(result) => setResult(result)} />
                </div>
                <div>{result}</div>
            </div>
        </div>
    );
};

export default ScannerPage;
