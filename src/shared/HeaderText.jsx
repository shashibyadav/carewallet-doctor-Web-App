import React from "react";
import "../styles/shared/header-text.css";

const HeaderText = ({ className = "header-text", children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default HeaderText;
