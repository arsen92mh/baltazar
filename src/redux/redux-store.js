import {postReducer} from "./post-reducer";
import {linkReducer} from "./links-reducer";
import {usersReducer} from "./users-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    posts: postReducer,
    links: linkReducer,
    users: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;