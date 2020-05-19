import React from "react";
import style from "./Maincontent.module.css";
import { NavLink, Route } from "react-router-dom";



const Maincontent = (props) => {


    let routeArr = props.state.linkData.map(
        (r) => {
            return <Route path={r.path}>{r.subLinks.map(
                (n) => {
                    return <NavLink to={n.childPath}>{n.childName}</NavLink>
                })}</Route>
        });



    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                {routeArr}


            </div>

            <div className={style.content}>

                

            </div>
        </div>
    );
}


export default Maincontent;