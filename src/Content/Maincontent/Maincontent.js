import React from "react";
import style from "./Maincontent.module.css";
import { NavLink, Route } from "react-router-dom";
import PostContainer from "./Post/PostContainer";

const Maincontent = (props) => {

    let routeOfLinks = props.state.links.linkData.map(
        (r) => {
            return <Route path={r.path}>{r.subLinks.map(
                (n) => { return <NavLink to={n.childPath}>{n.childName}</NavLink> })}</Route>
        });
    
    let newQuestionArea = React.createRef();
    let newAnswerArea = React.createRef();

    let addpost = () => {
        props.addpostCont();
    }

    let newPostText = () => {
        let questText = newQuestionArea.current.value;
        let ansText = newAnswerArea.current.value;
        props.newPostTextCont(questText, ansText);
    }


    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                {routeOfLinks}

            </div>

            <div className={style.content}>

                <button onClick={addpost}>Add post</button>
                <div className={style.postModal}>
                    <div className={style.queationBox}>
                        <textarea onChange={newPostText} value={props.state.posts.newPostData.newPostQuestion} ref={newQuestionArea} className={style.questionArea} placeholder="Enter your question"></textarea>
                    </div>
                    <div className={style.answerBox} >
                        <textarea onChange={newPostText} ref={newAnswerArea} className={style.answerArea} placeholder="Enter your answer" value={props.state.posts.newPostData.newPostAnswer}></textarea>
                    </div>
                </div>


                <PostContainer postData={props.postData} commentData={props.commentData} newCommentData={props.newCommentData} addCommentCont={props.addCommentCont} addNewCommentTextCont={props.addNewCommentTextCont}/>

            </div>
        </div>
    );
}

export default Maincontent;