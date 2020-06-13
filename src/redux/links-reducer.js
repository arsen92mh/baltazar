const UPDATE_NEW_CATEGORY = "UPDATE-NEW-CATEGORY";
const CREATE_NEW_CATEGORY = "CREATE-NEW-CATEGORY";

export const linkReducer = (state, action) => {
    if (action.type === UPDATE_NEW_CATEGORY) {
        state.newLinkData.categName = action.name;
        state.newLinkData.categPath = action.path;
    } else if (action.type === CREATE_NEW_CATEGORY) {
        let categ = {
            id: state.linkData.length + 1,
            path: state.newLinkData.categPath,
            name: state.newLinkData.categName,
            subLinks: []
        }
        state.linkData.push(categ);
        state.newLinkData.categPath = "";
        state.newLinkData.categName = "";
    }
    return state;
}
