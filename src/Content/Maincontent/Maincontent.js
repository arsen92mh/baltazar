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
    let newAuthor = React.createRef();

    let addpost = () => {

        let questText = newQuestionArea.current.value;
        let ansText = newAnswerArea.current.value;
        let authText = newAuthor.current.value;

        props.addPost(questText, ansText, authText);

    }


    return (
        <div className={style.wrapper}>
            <div className={style.header}>

                {routeOfLinks}

            </div>

            <div className={style.content}>

                <button onClick={addpost} >Add post</button>
                <div className="postModal">
                    <div className="queationBox">
                        <textarea ref={newQuestionArea} className="questionArea" placeholder="Enter your question"></textarea>
                    </div>
                    <div className="answerBox" >
                        <textarea ref={newAnswerArea} className="answerArea" placeholder="Enter your answer"></textarea>
                    </div>
                    <div className="authorBox">
                        <textarea ref={newAuthor} className="authorArea" placeholder="Enter your name"></textarea>
                    </div>
                </div>

                {postArr}

            </div>
        </div>
    );
}

export default Maincontent;