import React from "react";
import style from "./Maincontent.module.css";
import Documents from "../Documents/Documents";
import { NavLink, Route } from "react-router-dom";
import PostsContainer from "./Post/PostsContainer";
import Users from "../../Users/Users";

const Maincontent = (props) => {
    return (

        <div className={style.wrapper}>

            <Route path="/docs" render={() => <Documents />}></Route>
            <Route path="/questions" render={() => <PostsContainer />}></Route>
            <Route path="/users" render={() => <Users/>}></Route>
            
        </div>
    );
}

export default Maincontent;