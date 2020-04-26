import React from "react";
import style from "./Links.module.css";
import { NavLink, Route } from "react-router-dom";

const Links = () => {
    return (
        <div className={style.wrapper}>
            <NavLink to="/cl"><div className={style.link}>CL</div></NavLink>
            <NavLink to="/sl"><div className={style.link}>SL</div></NavLink>
            <NavLink to="/il"><div className={style.link}>IL</div></NavLink>
            <NavLink to="/mpl"><div className={style.link}>MPL</div></NavLink>
            <NavLink to="/common"><div className={style.link}>Общее</div></NavLink>
            <NavLink to="/docs"><div className={style.link}>Документы</div></NavLink>
        </div>
    );
}

export default Links;


