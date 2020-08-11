import React from 'react'
import style from "./Post.module.css";


const AddPost = (props) => {

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
        <div>
            <button onClick={addpost}>Add post</button>
            <div className={style.postModal}>
                <div className={style.queationBox}>
                    <textarea onChange={newPostText} value={props.newPostData.newPostQuestion} ref={newQuestionArea} className={style.questionArea} placeholder="Enter your question"></textarea>
                </div>
                <div className={style.answerBox} >
                    <textarea onChange={newPostText} ref={newAnswerArea} className={style.answerArea} placeholder="Enter your answer" value={props.newPostData.newPostAnswer}></textarea>
                </div>
            </div>
        </div>
    );
}

export default AddPost;