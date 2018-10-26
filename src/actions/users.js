import axios from 'axios';


export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED";
export const SELECT_USERS = "SELECT_USERS";
export const GET_POSTS_FULFILLED = "GET_POSTS_FULFILLED";


export function fetchUsers() {
    return dispatch => {
        dispatch({
            type: "FETCH_USERS",
            payload:axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => response.data)
        })
    }
}
export function onSelectUser( SelectedUserId ) {
    return dispatch => {
        dispatch({
            type: "SELECT_USERS",
            payload:SelectedUserId
        })
    }
}
export function getPosts(UsersId) {
        return dispatch => {
            // eslint-disable-next-line
            UsersId.map((user) => {
                 dispatch({
                    type: "GET_POSTS",
                    payload:axios.get(`https://jsonplaceholder.typicode.com/posts?userId=`+user)
                        .then(response => response.data)
                })
            });
        }
}
