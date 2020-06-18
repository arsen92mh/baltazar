import React from "react";
import style from "./Links.module.css";
import { NavLink, Route } from "react-router-dom";

const Links = (props) => {

    let linksArr = props.linkData.map(l => <NavLink to={l.path} activeClassName={style.active}>{l.name}</NavLink>)
    
    return (
        <div className={style.wrapper}>
            {linksArr}
        </div>
    );
}
export default Links;