import React from "react";
import Post from "./Post";

const PostContainer = (props) => {

    let postArr = props.postData.map(p => <Post postData={p} commentData={p.commentData} addNewCommentTextCont={props.addNewCommentTextCont} addCommentCont={props.addCommentCont}  newCommentData={props.newCommentData}/>)

    return (
        <div>
            {postArr}
        </div>
    );

}


export default PostContainer;