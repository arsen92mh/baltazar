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

export const newCommentTextActionCreator = (message) => {
    return {
        type: NEW_COMMENT_TEXT,
        commentText: message,
    }
}

export const newCommentActionCreator = () => {
    return {
        type: NEW_COMMENT
    }
}

let initialState = {
    postData: [
        {
            postid: 1,
            question: "В заявке не указаны модель/год выпуска авто. Тип диллера – Официальный.",
            answer: "Возвращать заявку по этой причине можно только если она полностью рассмотрена, и вы собираетесь ее одобрить",
            postAuthor: "Пупкина Залупкина",
            postTime: "14:10",
            postDate: "14.05.2020",
            hasComments: true,
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
    newCommentData: "",
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

    let stateCopy = { ...state };
    stateCopy.postData = [...state.postData];
    stateCopy.newPostData = { ...state.newPostData };
    stateCopy.postData[0].commentData = [...state.postData[0].commentData];

    let t = creteDate();

    switch (action.type) {
        case ADD_POST:
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
            postWrap.question = stateCopy.newPostData.newPostQuestion;
            postWrap.answer = stateCopy.newPostData.newPostAnswer;
            postWrap.postDate = `${t.day}.${t.month}.${t.year}`;
            postWrap.postTime = `${t.hour}:${t.minute}`;

            stateCopy.postData.unshift(postWrap);
            stateCopy.newPostData.newPostQuestion = "";
            stateCopy.newPostData.newPostAnswer = "";
            return stateCopy;
        case NEW_POST_TEXT:
            stateCopy.newPostData.newPostQuestion = action.stateQuestText;
            stateCopy.newPostData.newPostAnswer = action.stateAnsText;
            return stateCopy;
        case NEW_COMMENT_TEXT:
            stateCopy.newCommentData = action.commentText;
            return stateCopy;
        case NEW_COMMENT:
            let newComment = {
                commid: state.postData[0].commentData.length + 1,
                commText: state.newCommentData,
                commTime: `${t.hour}:${t.minute}`,
                commDate: `${t.day}.${t.month}.${t.year}`,
                likesCount: 0
            }
            stateCopy.postData[0].commentData.push(newComment);
            stateCopy.newCommentData = "";
            return stateCopy;
        default:
            return state;

    }
} 
