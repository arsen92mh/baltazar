import { postReducer } from "./post-reducer.js";
import { linkReducer } from "./links-reducer.js";



let store = {
    _state: {
        links: {
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
            newLinkData: {
                categName: "",
                categPath: "",
            }
        },
        posts: {
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
        }
    },
    _rerenderWholeDom() {
        console.log("State has been changed");
    },
    subscribe(observer) {
        this._rerenderWholeDom = observer;
    },
    getState() {
        return this._state;
    },
    dateCreator() {
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
    },
    dispatch(action) {
        this._state.links = linkReducer(this._state.links, action);
        this._state.posts = postReducer(this._state.posts, action, this.dateCreator());
        
        this._rerenderWholeDom(store.getState());
    }

}



