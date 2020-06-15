import React from "react";
import style from "./Post.module.css";
import CommentContainer from "./Comment/CommentContainer";

const Post = (props) => {


    let addNewCommentText = (e) => {
        let message = e.target.value;
        props.addNewCommentTextCont(message);
    }

    let addComment = () => {
        props.addCommentCont();
    }

    return (
        <div className={style.post}>

            <div className={style.qawrapper}>

                <div>
                    <div className={style.question}>{props.postData.question}</div>
                    <div className={style.answer}>{props.postData.answer}</div>
                    <div className={style.postAuthor}> {props.postData.postAuthor} </div>
                    <div className={style.postTime}>{props.postData.postTime}</div>
                    <div className={style.postDate}>{props.postData.postDate}</div>
                </div>

            </div>

            <div className={style.commentArea}>
                <textarea onChange={addNewCommentText} placeholder="Комментарий" value={props.newCommentData}></textarea>
                <button onClick={addComment}>Добавить комментарий</button>

                <CommentContainer commentData={props.commentData}/>

            </div>

        </div>
    );

}


export default Post;