import React from "react";
import style from "./Qa.module.css";

const Qa = (props) => {

    return (
        <div>
            <div className={style.question}>{props.postData.question}</div>
            <div className={style.answer}>{props.postData.answer}</div>
            <div className={style.postAuthor}> {props.postData.postAuthor} </div>
            <div className={style.postTime}>{props.postData.postTime}</div>
            <div className={style.postDate}>{props.postData.postDate}</div>
        </div>
    );
}

export default Qa;