import rerenderWholeDom from "./../rerender.js";

let state = {
    linkData: [
        {
            id: 1, path: "/cl", name: "CL", subLinks:
                [
                    { childId: 1, childPath: "/cl/anketa", childName: "Анкета клиента" },
                    { childId: 2, childPath: "/cl/aspr", childName: "Сообщения АСПР" },
                    { childId: 3, childPath: "/cl/rt", childName: "Рабочий телефон" },
                    { childId: 4, childPath: "/cl/site", childName: "Сайт организации" },
                    { childId: 5, childPath: "/cl/komment", childName: "Комментарии/СП" },
                    { childId: 6, childPath: "/cl/cldocs", childName: "Документы" },
                    { childId: 7, childPath: "/cl/inform", childName: "Информационные источники" },
                    { childId: 8, childPath: "/cl/cf", childName: "CoreFinans" }
                ]
        },
        {
            id: 2, path: "/sl", name: "SL", subLinks: [
                { childId: 1, childPath: "/sl/slvr", childName: "SL ВР" },
                { childId: 2, childPath: "/sl/factoring", childName: "Факторинг" }
            ]
        },
        {
            id: 3, path: "/il", name: "IL", subLinks: [
                { childId: 1, childPath: "/il/ilvr", childName: "IL ВР" },
                { childId: 2, childPath: "/il/il2", childName: "IL 2" }
            ]
        },

        {
            id: 4, path: "/mpl", name: "MPL", subLinks: [
                { childId: 1, childPath: "/mpl/mpl1", childName: "MPL1" },
                { childId: 2, childPath: "/mpl/mpl2", childName: "MPL2" }
            ]
        },

        {
            id: 5, path: "/cc", name: "CC", subLinks: [
                { childId: 1, childPath: "/cc/cc1", childName: "cc1" },
                { childId: 2, childPath: "/cc/cc2", childName: "cc1" }
            ]
        },

        {
            id: 6, path: "/common", name: "Общее", subLinks: [
                { childId: 1, childPath: "/common/common1", childName: "common1" },
                { childId: 2, childPath: "/common/common2", childName: "common2" }
            ]
        },

        {
            id: 7, path: "/docs", name: "Документы", subLinks: [
                { childId: 1, childPath: "/docs/docs1", childName: "docs1" },
                { childId: 2, childPath: "/docs/docs2", childName: "docs2" }
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
}

export let addPost = function (quest, ans, auth) {
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
    let postDataIndex = state.postData.length;
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
    postWrap.question = quest;
    postWrap.answer = ans;
    postWrap.postAuthor = auth;
    postWrap.postDate = `${addZero(newPostDay)}.${addZero(newPostMonth)}.${newPostYear}`;
    postWrap.postTime = `${addZero(newPostHour)}:${addZero(newPostMinute)}`;
    
    
    state.postData.unshift(postWrap);

    
    
    rerenderWholeDom(state);
    debugger;
}

export default state;