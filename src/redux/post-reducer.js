const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-QUESTION-FUNC";
const NEW_COMMENT_TEXT = "NEW-COMMENT-TEXT";
const NEW_COMMENT = "NEW-COMMENT";

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const newPostTextActionCreator = (a, b) => {
    return {
        type: NEW_POST_TEXT,
        stateQuestText: a,
        stateAnsText: b
    }
}

export const newCommentTextActionCreator = (message, id) => {
    return {
        type: NEW_COMMENT_TEXT,
        commentText: message,
        ind: id
    }
}

export const newCommentActionCreator = (id) => {
    return {
        type: NEW_COMMENT,
        ind: id
    }
}

let initialState = {
    postData: [
        {
            postid: 1,
            question: "Почему?",
            answer: "По качану!!",
            postAuthor: "Некто",
            postTime: "14:10",
            postDate: "14.05.2020",
            hasComments: true,
            newCommentData: "",
            commentData: [{
                commId: 1,
                commText: "почему?",
                commTime: "12:30",
                commDate: "20.05.2020",
                likesCount: 1
            }
            ]
        }
    ],
    newPostData: {
        newPostQuestion: "",
        newPostAnswer: ""
    }
};

let creteDate = () => {
    let addZero = (num) => {
        if (num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    }
    let newPostDate = new Date();
    return {
        year: addZero(newPostDate.getFullYear()),
        month: addZero(newPostDate.getMonth() + 1),
        day: addZero(newPostDate.getDate()),
        hour: addZero(newPostDate.getHours()),
        minute: addZero(newPostDate.getMinutes()),
        second: addZero(newPostDate.getSeconds())
    }
}


export const postReducer = (state = initialState, action) => {


    let t = creteDate();

    switch (action.type) {
        case ADD_POST:
            let postWrap = {
                postAuthor: "",
                newCommentData: "",
                hasComments: false,
                commentData: []
            }

            postWrap.postid = state.postData.length + 1;
            postWrap.question = state.newPostData.newPostQuestion;
            postWrap.answer = state.newPostData.newPostAnswer;
            postWrap.postDate = `${t.day}.${t.month}.${t.year}`;
            postWrap.postTime = `${t.hour}:${t.minute}`;

            return {
                ...state,
                postData: [...state.postData, postWrap],
                newPostData: { ...state.newPostData, newPostQuestion: "", newPostAnswer: "" }
            }


        case NEW_POST_TEXT:


            return {
                ...state,
                newPostData: {
                    ...state.newPostData,
                    newPostQuestion: action.stateQuestText,
                    newPostAnswer: action.stateAnsText
                }
            };

        case NEW_COMMENT_TEXT:

            state.postData[action.ind - 1].newCommentData = action.commentText;

            
            return {
                ...state,
                postData: [...state.postData]
            }


        case NEW_COMMENT:
            let newComment = {
                commid: state.postData[action.ind - 1].commentData.length + 1,
                commText: state.postData[action.ind - 1].newCommentData,
                commTime: `${t.hour}:${t.minute}`,
                commDate: `${t.day}.${t.month}.${t.year}`,
                likesCount: 0
            }


            state.postData[action.ind - 1].commentData.push(newComment);
            state.postData[action.ind - 1].newCommentData = "";

            return {
                ...state,
                postData: [...state.postData]
            };




        default:
            return state;

    }
} 
