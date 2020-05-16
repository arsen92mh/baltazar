import React from "react";
import style from "./Links.module.css";
import { NavLink, Route } from "react-router-dom";



const Links = (props) => {

    
    
    let linksArr = props.linkData.map(linkItem => <NavLink to={linkItem.path} activeClassName={style.active}>{linkItem.name}</NavLink>)


    return (
        <div className={style.wrapper}>
            {linksArr}
        </div>
    );
}
export default Links;