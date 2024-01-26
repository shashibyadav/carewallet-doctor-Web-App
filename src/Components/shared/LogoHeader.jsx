import React from "react";
import "../../styles/shared/logo-header.css";
const LogoHeader = () => {
    return <div className={`logo-header`}>
        <img className={`logo-header-img`} src={`https://carewallet-dev.s3.amazonaws.com/doctor/media/images/CareWalletLogo.png`} />
    </div>;
}

export default LogoHeader;