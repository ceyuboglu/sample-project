import { FETCH_USERS_FULFILLED, SELECT_USERS, GET_POSTS_FULFILLED } from '../actions/users';

const initialState = {
    users:[ ],
    fetched:false,
    selectedusers:[ ],
    userPosts:[]
};
export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_FULFILLED:
            return {
                ...state,
                users: action.payload,
                fetched: true
            };
        case SELECT_USERS:
            state.userPosts = [] ;
            return {
                ...state,
                selectedusers:action.payload
            };
        case GET_POSTS_FULFILLED:
            return {
                ...state,
                userPosts: [...state.userPosts, ...action.payload],
                fetched:true
            };
        default:
            return state;
    }
}