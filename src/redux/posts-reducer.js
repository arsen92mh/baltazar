const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-QUESTION-FUNC";
const NEW_COMMENT_TEXT = "NEW-COMMENT-TEXT";
const NEW_COMMENT = "NEW-COMMENT";

export const postReducer = (state, action, t) => {

    if (action.type === ADD_POST) {
        let postWrap = {
            postid: 0,
            question: "",
            answer: "",
            postAuthor: "",
            postTime: "",
            postDate: "",
            hasComments: false,
            newCommentData: "",
            commentData: []
        }
        let postDataIndex = state.postData.length;
        postWrap.postid = postDataIndex + 1;
        postWrap.question = state.newPostData.newPostQuestion;
        postWrap.answer = state.newPostData.newPostAnswer;
        postWrap.postDate = `${t.day}.${t.month}.${t.year}`;
        postWrap.postTime = `${t.hour}:${t.minute}`;


        state.postData.unshift(postWrap);
        state.newPostData.newPostQuestion = "";
        state.newPostData.newPostAnswer = "";

    } else if (action.type === NEW_POST_TEXT) {
        state.newPostData.newPostQuestion = action.stateQuestText;
        state.newPostData.newPostAnswer = action.stateAnsText;
    } else if (action.type === NEW_COMMENT_TEXT) {
        state.newCommentData = action.commentText;
    } else if (action.type === NEW_COMMENT) {
        let newComment = {
            commid: state.postData[0].commentData.length + 1,
            commText: state.newCommentData,
            commTime: `${t.hour}:${t.minute}`,
            commDate: `${t.day}.${t.month}.${t.year}`,
            likesCount: 0
        }
        state.postData[0].commentData.push(newComment);
        state.newCommentData = "";
    }

    return state;
} 
