import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import MyButton from "../../components/UI/Button/MyButton";
import cl from "./ScannerPage.module.css";

const ScannerPage = () => {
    const [scanResult, setScanResult] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [lastErrorMessage, setLastErrorMessage] = useState(null);
    const html5QrCodeRef = useRef(null);

    useEffect(() => {
        html5QrCodeRef.current = new Html5Qrcode("reader");
        return () => {
            if (html5QrCodeRef.current && isScanning) {
                html5QrCodeRef.current
                    .stop()
                    .catch((err) =>
                        console.error("Failed to stop scanning", err)
                    );
            }
        };
    }, []);

    const startScanning = () => {
        if (isScanning) return; // Prevent starting if already scanning

        const config = {
            fps: 10,
            qrbox: { width: 300, height: 300 },
            aspectRatio: 1,
        };
        html5QrCodeRef.current
            .start(
                { facingMode: "environment" },
                config,
                (decodedText) => {
                    setScanResult(decodedText);
                    stopScanning();
                },
                (errorMessage) => {
                    setLastErrorMessage(errorMessage);
                    if (errorMessage !== lastErrorMessage) {
                        // console.warn(
                        //     `QR Code no longer in front of camera. Error: ${errorMessage}`
                        // );
                    }
                }
            )
            .then(() => {
                setIsScanning(true);
                setErrorMessage(null); // Clear any previous error messages
            })
            .catch((err) => {
                console.error("Unable to start scanning", err);
                if (
                    err.name === "NotAllowedError" ||
                    err.name === "PermissionDeniedError"
                ) {
                    setErrorMessage("Вы не предоставили доступ к камере");
                } else {
                    setErrorMessage(
                        "Произошла ошибка при попытке доступа к камере"
                    );
                }
            });
    };

    const stopScanning = () => {
        if (!isScanning) return; // Prevent stopping if not scanning

        html5QrCodeRef.current
            .stop()
            .then(() => {
                setIsScanning(false);
            })
            .catch((err) => {
                console.error("Failed to stop scanning", err);
            });
    };

    return (
        <div className={cl.scanner}>
            <Header title="QR-сканер" showIcons={true} />
            <div className={cl.background}>
                <h1 className={cl.title}>QR-сканер</h1>
                <div className={cl.container}>
                    {scanResult ? (
                        <div>{scanResult}</div>
                    ) : (
                        <div id="reader" className={cl.reader}></div>
                    )}
                    {errorMessage && (
                        <div className={cl.error}>{errorMessage}</div>
                    )}
                    <div className={cl.controls}>
                        {!scanResult && !isScanning && (
                            <MyButton onClick={startScanning}>
                                Сканировать
                            </MyButton>
                        )}
                        {!scanResult && isScanning && (
                            <MyButton onClick={stopScanning}>
                                Завершить
                            </MyButton>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScannerPage;
