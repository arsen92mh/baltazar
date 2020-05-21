import React from "react";
import style from "./Post.module.css";
import Comment from "./Comment/Comment.js";
import Qa from "./Qa/Qa.js";

const Post = (props) => {

    return (
        <div className={style.post}>

            <div className={style.qawrapper}>
                <Qa postData={props.postData}/>
            </div>

            <div className={style.commentArea}>

                <Comment commentData={props.postData.commentData}/>

            </div>

        </div>
    );

}


export default Post;