import React from "react";
import Post from "./Post";

const MyPosts = (props) => {

    let postArr = props.postData.map(p => <Post postData={p} key={p.postid} ind={p.postid} commentData={p.commentData} addNewCommentTextCont={props.addNewCommentTextCont} addCommentCont={props.addCommentCont} newCommentData={props.newCommentData}  dispatch={props.dispatch}/>)

    return (
        <div>
            {postArr}
        </div>
    );
}

export default MyPosts;