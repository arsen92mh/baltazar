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
    ]
}

export default state;