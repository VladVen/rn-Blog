import {DATA} from "../../data";
import {DB} from "../../db";

const GET_POSTS = 'GET-POSTS'
const TOGGLE_BOOKED = 'ADD_BOOKED'
const DEL_POST = 'DEL_POST'
const ADD_POST = 'ADD_POST'


const initialState = {
    posts: [],
    bookedPosts: []
}


const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts: action.payload,
                bookedPosts: action.payload.filter(item => item.booked)
            }
        case TOGGLE_BOOKED :
            const posts = state.posts.map(item => {
                if (item.id === action.id) {
                    item.booked = !item.booked
                }
                return item
            })
            return {
                ...state,
                posts,
                bookedPosts: posts.filter(item => item.booked)
            }
        case DEL_POST :
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.id),
                bookedPosts: state.bookedPosts.filter(item => item.id !== action.id)
            }
        case ADD_POST :
            return {
                ...state,
                posts: [{...action.payload}, ...state.posts]
            }
        default:
            return state
    }
}


export const getPost = () => {
    return async dispatch => {
        const posts = await DB.getPost()
        return (
            {
                type: GET_POSTS,
                payload: posts
            }
        )
    }
}
export const toggleBooked = (id) => ({
    type: TOGGLE_BOOKED,
    id
})
export const delPost = (id) => ({
    type: DEL_POST,
    id
})
export const addPost = (post) => {
    post.id = Date.now().toString()
    post.date = new Date().toJSON()
    return {
        type: ADD_POST,
        payload: post
    }
}


export default PostReducer