import React from "react";
import style from "./Maincontent.module.css";
import DocumentsContainer from "../Documents/Documents";
import {  Route } from "react-router-dom";
import PostsContainer from "./Post/PostsContainer";
import UsersContainer from "../../Users/UsersContainer";
import Login from "../Login/Login";

const Maincontent = (props) => {
    return (

        <div className={style.wrapper}>

            <Route path="/docs" render={() => <DocumentsContainer />}></Route>
            <Route path="/questions" render={() => <PostsContainer />}></Route>
            <Route path="/users" render={() => <UsersContainer/>}></Route>
            <Route path="/login" render={() => <Login/>}></Route>
            
        </div>
    );
}

export default Maincontent;