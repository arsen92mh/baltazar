import React from "react";
import style from "./Comment.module.css";
import heart from "./../../../../icons/heart-solid.svg";

const Comment = (props) => {

    return (
        <div className={style.comm}>
            <div className={style.commtext}>{props.commentData.commText}</div>
            <div className={style.commtime}>{props.commentData.commTime}</div>
            <div className={style.commdate}>{props.commentData.commDate}</div>
            <div className={style.likes}><img src={heart}></img>{props.commentData.likesCount}</div>
        </div>
    );
}

export default Comment;