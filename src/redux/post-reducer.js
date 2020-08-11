const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "NEW-POST-QUESTION-FUNC";
const NEW_COMMENT_TEXT = "NEW-COMMENT-TEXT";
const NEW_COMMENT = "NEW-COMMENT";
const SET_POSTS = "SET_POSTS";
const SET_POSTS_FETCH = "SET_POSTS_FETCH";

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

export const setPostsAC = (data) => {
    return {type: SET_POSTS, data}
}

export const setPostsFetchingAC = (param) => {
    return {type: SET_POSTS_FETCH, param}
}

/* export const newCommentTextActionCreator = (message, id) => {
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
} */

let initialState = {
    postData: [
        /*  {
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
         } */
    ],
    newPostData: {
        newPostQuestion: "",
        newPostAnswer: ""
    },
    categories: [
        {id: 1, param: "all"},
        {id: 2, param: "sl"},
        {id: 3, param: "cl"}
    ],
    isAbletoModerate: false,
    isFetching: true
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
            return {
                ...state,
                postData: state.postData.map(p => {
                    if (action.ind === p.postid) {
                        return { ...p, newCommentData: action.commentText }
                    } else {
                        return p;
                    }
                })
            }
        case NEW_COMMENT:

            let newComment = {
                commid: state.postData[action.ind - 1].commentData.length + 1,
                commText: state.postData[action.ind - 1].newCommentData,
                commTime: `${t.hour}:${t.minute}`,
                commDate: `${t.day}.${t.month}.${t.year}`,
                likesCount: 0
            }
            return {
                ...state,
                postData: state.postData.map(p => {
                    if (action.ind === p.postid) {
                        return {
                            ...p,
                            commentData: [...p.commentData, newComment],
                            newCommentData: ""
                        }
                    } else {
                        return p;
                    }
                })
            }
            case SET_POSTS:
                return {
                    ...state,
                    postData: [...action.data]
                }
            case SET_POSTS_FETCH:
                return {
                    ...state,
                    isFetching: action.param
                }
        default:
            return state;

    }
} 
