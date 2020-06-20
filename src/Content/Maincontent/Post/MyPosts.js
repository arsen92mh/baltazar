import React from "react";
import Post from "./Post";
import style from "./Post.module.css";

const MyPosts = (props) => {
    let postArr = props.postData.map(p => <Post 
        postData={p} 
        key={p.postid} 
        ind={p.postid} 
        commentData={p.commentData} 
        addNewCommentTextCont={props.addNewCommentTextCont} 
        addCommentCont={props.addCommentCont} 
        newCommentData={p.newCommentData}  dispatch={props.dispatch}/>)

    return (
        <div className={style.postArrWrapper}>
            {postArr}
        </div>
    );
}

export default MyPosts;