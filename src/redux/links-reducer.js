const UPDATE_NEW_CATEGORY = "UPDATE-NEW-CATEGORY";
const CREATE_NEW_CATEGORY = "CREATE-NEW-CATEGORY";

export const updateNewCategoryActionCreator = (a, b) => {
    return {
        type: UPDATE_NEW_CATEGORY,
        name: a,
        path: b
    }
}

export const createCategoryActionCreator = () => {
    return { type: CREATE_NEW_CATEGORY }
}

let initialState= {
    linkData: [
        {
            id: 1, path: "/cl", name: "CL", subLinks:
                [
                    { childId: 1, childPath: "/cl/anketa", childName: "Анкета клиента" }
                ]
        },
        {
            id: 2, path: "/sl", name: "SL", subLinks: [
                { childId: 1, childPath: "/sl/slvr", childName: "SL ВР" }
            ]
        }
    ],
    newLinkData: {
        categName: "",
        categPath: "",
    }
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_CATEGORY: 
            state.newLinkData.categName = action.name;
            state.newLinkData.categPath = action.path;
            return state;
        case CREATE_NEW_CATEGORY:
            let categ = {
                id: state.linkData.length + 1,
                path: state.newLinkData.categPath,
                name: state.newLinkData.categName,
                subLinks: []
            }
            state.linkData.push(categ);
            state.newLinkData.categPath = "";
            state.newLinkData.categName = "";
            return state;
        default:
            return state;
    }
}
