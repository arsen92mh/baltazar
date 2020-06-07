let store = {
    _state: {
        linkData: [
            {
                id: 1, path: "/cl", name: "CL", subLinks:
                    [
                        { childId: 1, childPath: "/cl/anketa", childName: "Анкета клиента" },
                        { childId: 2, childPath: "/cl/aspr", childName: "Сообщения АСПР" }
                    ]
            },
            {
                id: 2, path: "/sl", name: "SL", subLinks: [
                    { childId: 1, childPath: "/sl/slvr", childName: "SL ВР" },
                    { childId: 2, childPath: "/sl/factoring", childName: "Факторинг" }
                ]
            }
        ],
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
        newPostData:{
            newPostQuestion:"",
            newPostAnswer: ""
        }
    },
    _rerenderWholeDom () {
        console.log("State has been changed");
    },
    getState () {
        return this._state;
    },
    newPostQuestionFunc (stateQuestText, stateAnsText) {

        this._state.newPostData.newPostQuestion = stateQuestText;
        this._state.newPostData.newPostAnswer = stateAnsText;
        this._rerenderWholeDom(store);
    },
    addPost () {
        debugger;
        let postWrap = {
            postid: 0,
            question: "",
            answer: "",
            postAuthor: "",
            postTime: "",
            postDate: "",
            hasComments: false,
            commentData: []
        }
        let postDataIndex = this._state.postData.length;
        let newPostDate = new Date();
        let newPostYear = newPostDate.getFullYear();
        let newPostMonth = newPostDate.getMonth() +1;
        let newPostDay = newPostDate.getDate();
        let newPostHour = newPostDate.getHours();
        let newPostMinute = newPostDate.getMinutes();
        let addZero = (num) => {
            if (num <=9) {
                return "0"+num;
            } else {
                return num;
            }
        }
        postWrap.postid = postDataIndex + 1;
        postWrap.question = this._state.newPostData.newPostQuestion;
        postWrap.answer = this._state.newPostData.newPostAnswer;
        postWrap.postDate = `${addZero(newPostDay)}.${addZero(newPostMonth)}.${newPostYear}`;
        postWrap.postTime = `${addZero(newPostHour)}:${addZero(newPostMinute)}`;
        
        
        this._state.postData.unshift(postWrap);
        this._state.newPostData.newPostQuestion = "";
        this._state.newPostData.newPostAnswer = "";
        
        this._rerenderWholeDom(store);
    },
    subscribe (observer) {
        this._rerenderWholeDom = observer;
    }

}


export default store;
window.store = store;