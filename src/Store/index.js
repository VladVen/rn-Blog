import {applyMiddleware, combineReducers, createStore} from "redux";
import PostReducer from "./reducers/post";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    post: PostReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))

