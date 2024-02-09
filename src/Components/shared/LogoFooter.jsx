import React from "react";
import "../../styles/shared/logo-footer.css";
const LogoFooter = () => {
    return <div className={`logo-footer`}>
        <img className={`logo-footer-img`} src={`https://carewallet-dev.s3.amazonaws.com/doctor/media/images/CareWalletLogo.png`} />
    </div>;
}

export default LogoFooter;