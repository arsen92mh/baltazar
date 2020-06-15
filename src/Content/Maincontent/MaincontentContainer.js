import React from "react";
import { addPostActionCreator, newPostTextActionCreator, newCommentTextActionCreator, newCommentActionCreator } from "../../redux/post-reducer";
import Maincontent from "./Maincontent";

const MaincontentContainer = (props) => {

    let addpostCont = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostTextCont = (questText, ansText) => {
        props.dispatch(newPostTextActionCreator(questText, ansText));
    }

    let addNewCommentTextCont = (message) => {
        props.dispatch(newCommentTextActionCreator(message));
    }

    let addCommentCont = () => {
        props.dispatch(newCommentActionCreator());
    }

    return (
        <Maincontent addCommentCont={addCommentCont} addNewCommentTextCont={addNewCommentTextCont} addpostCont={addpostCont} newPostTextCont={newPostTextCont} dispatch={props.dispatch} postData={props.state.posts.postData} commentData={props.state.posts.postData.commentData} newCommentData={props.state.posts.newCommentData} linkData={props.state.links.linkData} newPostAnswer={props.state.posts.newPostData.newPostAnswer} newPostQuestion={props.state.posts.newPostData.newPostQuestion} />
    );

}

export default MaincontentContainer;