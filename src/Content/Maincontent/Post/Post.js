import React from "react";
import style from "./Post.module.css";
import Comment from "./Comment/Comment";

const Post = (props) => {

    let addNewCommentText = (e) => {
        let message = e.target.value;
        let id = props.ind;
        props.addNewCommentTextCont(message, id);
    }

    let addComment = () => {
        let id = props.ind;
        props.addCommentCont(id);
    }

    let commentArr = props.commentData.map(c => <Comment key={c.commId} commentData={c} />);

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

                {commentArr}


            </div>

        </div>
    );

}


export default Post;