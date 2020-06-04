import React from "react";
import style from "./Maincontent.module.css";
import { NavLink, Route } from "react-router-dom";
import Post from "./Post/Post";



const Maincontent = (props) => {


    let routeOfLinks = props.state.linkData.map(
        (r) => {
            return <Route path={r.path}>{r.subLinks.map(
                (n) => { return <NavLink to={n.childPath}>{n.childName}</NavLink> })}</Route>
        });

    let postArr = props.state.postData.map(p => <Post postData={p} commentData={p.commentData} />)


    let newQuestionArea = React.createRef();
    let newAnswerArea = React.createRef();

    let addpost = () => {
        props.addPost();
    }

    let newPostText = () => {
        let questText = newQuestionArea.current.value;
        let ansText = newAnswerArea.current.value;
        props.newPostQuestionFunc(questText, ansText);
        debugger;
        
    }


    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                {routeOfLinks}

            </div>

            <div className={style.content}>

                <button onClick={addpost}>Add post</button>
                <div className="postModal">
                    <div className="queationBox">
                        <textarea onChange={newPostText} value={props.state.newPostQuestion} ref={newQuestionArea} className="questionArea" placeholder="Enter your question"></textarea>
                    </div>
                    <div className="answerBox" >
                        <textarea onChange={newPostText}  ref={newAnswerArea} className="answerArea" placeholder="Enter your answer"></textarea>
                    </div>
                </div>

                {postArr}

            </div>
        </div>
    );
}

export default Maincontent;