import React from "react";
import style from "./contentpicture.module.css";
import contPic from"../../img/droit.jpg";

const Contentpicture = () => {
    return(
        <div className={style.pic}><img src={contPic} alt="pic"></img></div>
    );
}

export default Contentpicture; 