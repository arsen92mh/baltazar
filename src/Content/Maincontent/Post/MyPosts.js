import React from "react";
import Post from "./Post";
import style from "./Post.module.css";
import Preloader from "../../Preloader/Preloader";
import { NavLink } from "react-router-dom";

const MyPosts = (props) => {
    debugger

    let postArr = props.postData.map(p => 
        <Post
        postData={p}
        key={p.postid}
        ind={p.postid}
        title={p.title}

    />
    )

    let reversePostArr = [];

    for (let i = 0; i < postArr.length; i++) {
        reversePostArr.unshift(postArr[i]);
    }

    return (
        <div>
            <div>{props.isFetching ? <Preloader /> : null}</div>
            <div className={style.postArrWrapper}> {reversePostArr}</div>
        </div>
    );
}

export default MyPosts;