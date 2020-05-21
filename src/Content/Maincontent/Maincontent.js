import React from "react";
import style from "./Maincontent.module.css";
import { NavLink, Route } from "react-router-dom";
import Post from "./Post/Post";



const Maincontent = (props) => {

    let routeOfLinks = props.state.linkData.map(
        (r) => {
            return <Route path={r.path}>{r.subLinks.map(
                (n) => { return <NavLink to={n.childPath}>{n.childName}</NavLink> })}</Route>
        });

    let postArr = props.state.postData.map(p => <Post postData={p} />)

    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                {routeOfLinks}

            </div>

            <div className={style.content}>

                <button>Add post</button>

                {postArr}

            </div>
        </div>
    );
}


export default Maincontent;