

let initialState= {
    linkData: [
        {id: 1, path: "/docs", name: "Документы"},
        {id: 2, path: "/questions", name: "Вопросы"},
        {id: 3, path: "/users", name: "Отдел"}
    ],
    newLinkData: {
        categName: "",
        categPath: "",
    }
};

export const linkReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }
}
