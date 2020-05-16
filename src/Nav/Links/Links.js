import React from "react";
import style from "./Links.module.css";
import { NavLink, Route } from "react-router-dom";

let arr = [
    { id: 1, path: "/cl", name: "CL" },
    { id: 2, path: "/sl", name: "SL" },
    { id: 3, path: "/il", name: "IL" },
    { id: 4, path: "/mpl", name: "MPL" },
    { id: 5, path: "/common", name: "Общее" },
    { id: 6, path: "/docs", name: "Документы" }
]
let linksArr = arr.map(linkItem => <NavLink to={linkItem.path} activeClassName={style.active}>{linkItem.name}</NavLink>)
const Links = () => {
    return (
        <div className={style.wrapper}>
            {
                linksArr
            }
        </div>
    );
}
export default Links;