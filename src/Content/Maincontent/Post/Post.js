import React from "react";
import style from "./Post.module.css";
import Comment from "./Comment/Comment.js";
import Qa from "./Qa/Qa.js";
import { newCommentTextActionCreator, newCommentActionCreator } from "../../../redux/post-reducer";

const Post = (props) => {

    let commentArr = props.commentData.map(c => <Comment commentData={c} />);

    let addNewCommentText = (e) => {
        let message = e.target.value;
        props.dispatch(newCommentTextActionCreator(message));
    }

    let addComment = () => {
        props.dispatch(newCommentActionCreator());
    }

    return (
        <div className={style.post}>

            <div className={style.qawrapper}>

                <Qa postData={props.postData} />

            </div>

            <div className={style.commentArea}>
                <textarea onChange={addNewCommentText} placeholder="Комментарий" value={props.newCommentData}></textarea>
                <button onClick={addComment}>Добавить комментарий</button>

                {commentArr}

            </div>

        </div>
    );

}


export default Post;