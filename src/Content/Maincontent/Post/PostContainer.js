import React from "react";
import { newCommentTextActionCreator, newCommentActionCreator } from "../../../redux/post-reducer";
import Post from "./Post";

const PostContainer = (props) => {


    let addNewCommentTextCont = (message) => {
        props.dispatch(newCommentTextActionCreator(message));
    }

    let addCommentCont = () => {
        props.dispatch(newCommentActionCreator());
    }


    let postArr = props.postData.map(p => <Post postData={p} commentData={p.commentData} addNewCommentTextCont={addNewCommentTextCont} addCommentCont={addCommentCont}  newCommentData={props.newCommentData}/>)

    return (
        <div>
            {postArr}
        </div>
    );

}


export default PostContainer;