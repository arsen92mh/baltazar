import {postReducer} from "./post-reducer";
import {linkReducer} from "./links-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer.js";
import {docsReducer} from "./docs-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    posts: postReducer,
    links: linkReducer,
    users: usersReducer,
    auth: authReducer,
    docs: docsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;