import {postReducer} from "./post-reducer";
import {linkReducer} from "./links-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    posts: postReducer,
    links: linkReducer
});

let store = createStore(reducers);


export default store;