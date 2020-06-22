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

        let reversePostArr =[];

        for (let i = 0; i <postArr.length; i++) {
            reversePostArr.unshift(postArr[i]);
        }
        
    return (
        <div className={style.postArrWrapper}>
            {reversePostArr}
        </div>
    );
}

export default MyPosts;