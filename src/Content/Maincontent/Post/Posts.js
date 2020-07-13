import React from 'react'
import style from "../Maincontent.module.css";
import PostContainer from "./PostContainer";

const Posts = (props) => {

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
        <>

            <div className={style.content}>

                <button onClick={addpost}>Add post</button>
                <div className={style.postModal}>
                    <div className={style.queationBox}>
                        <textarea onChange={newPostText} value={props.newPostQuestion} ref={newQuestionArea} className={style.questionArea} placeholder="Enter your question"></textarea>
                    </div>
                    <div className={style.answerBox} >
                        <textarea onChange={newPostText} ref={newAnswerArea} className={style.answerArea} placeholder="Enter your answer" value={props.newPostAnswer}></textarea>
                    </div>
                </div>


                <PostContainer/>

            </div>

        </>
    );
}

export default Posts;