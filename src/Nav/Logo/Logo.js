import React from "react";
import style from "./Logo.module.css";
import logo from "../../img/logo.png";

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={logo} alt="logo"></img>
        </div>
    );
}

export default Logo;