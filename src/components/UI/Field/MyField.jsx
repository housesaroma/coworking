import React, { useState } from "react";
import cl from "./MyField.module.css";
import pencil from "../../../assets/icons/pencil.svg";

const MyField = React.forwardRef((props, ref) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };


    return (
        <div className={cl.fieldContainer}>
            <input
                ref={ref}
                className={cl.myInput}
                {...props}
                disabled={!isEditing}
            />
            <img
                src={pencil}
                alt="edit"
                className={cl.pencil}
                onClick={handleEditClick}
            />
        </div>
    );
});

export default MyField;
