import * as FileSystem from 'expo-file-system';
import {DB} from "../../db";

const GET_POSTS = 'GET-POSTS'
const TOGGLE_BOOKED = 'ADD_BOOKED'
const DEL_POST = 'DEL_POST'
const ADD_POST = 'ADD_POST'


const initialState = {
    posts: [],
    bookedPosts: [],
    loading: true
}


const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts: action.payload,
                bookedPosts: action.payload.filter(item => item.booked),
                loading: false
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
        dispatch (
            {
                type: GET_POSTS,
                payload: posts
            }
        )
    }
}
export const toggleBooked = (post) => async dispatch => {

    await DB.savePost(post)
    dispatch({
        type: TOGGLE_BOOKED,
        id: post.id
    })
}
export const delPost = (id) =>async dispatch => {
    await DB.removePost(id)
    dispatch({
        type: DEL_POST,
        id
    })
}


export const addPost = post => async dispatch => {
    const file = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + file
    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log('Error: ' , e)
    }
    const payload = {...post, img: newPath}
    const id = await DB.addPost(payload)
    payload.id = id
    dispatch( {
        type: ADD_POST,
        payload
    })
}


export default PostReducer