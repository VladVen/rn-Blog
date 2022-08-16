import {combineReducers, createStore} from "redux";
import PostReducer from "./reducers/post";

const rootReducer = combineReducers({
    post: PostReducer
})

export default createStore(rootReducer)

