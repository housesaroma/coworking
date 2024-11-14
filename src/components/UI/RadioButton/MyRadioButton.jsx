import React from "react";
import cl from "./MyRadioButton.module.css";
const MyRadioButton = ({ children, isSelected, ...props }) => {
    return (
        <button
            {...props}
            className={`${cl.myBtn} ${!isSelected ? cl.notSelected : ""}`}
        >
            {children}
        </button>
    );
};

export default MyRadioButton;
