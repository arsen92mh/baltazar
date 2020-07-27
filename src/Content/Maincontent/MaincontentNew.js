import React from "react";
import style from "./Maincontent.module.css";
import Documents from "../Documents/Documents";
import { NavLink, Route } from "react-router-dom";
import PostsContainer from "./Post/PostsContainer";
import UsersContainer from "../../Users/UsersContainer";

const Maincontent = (props) => {
    return (

        <div className={style.wrapper}>

            <Route path="/docs" render={() => <Documents />}></Route>
            <Route path="/questions" render={() => <PostsContainer />}></Route>
            <Route path="/users" render={() => <UsersContainer/>}></Route>
            
        </div>
    );
}

export default Maincontent;