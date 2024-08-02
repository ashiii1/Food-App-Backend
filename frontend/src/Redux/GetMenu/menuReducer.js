import { GET_REJ, GET_REQ, GET_SUCCESS } from "./actionTypes"





const initialState = {
    menus : [],
    isLoading : false,
    isError : false,
    user : null
}

export const menuReducer = (state= initialState, {type, payload})=>{
    switch(type){
        case GET_REQ:
            return {...state, isLoading: true, isError: false}
        case GET_REJ:
            return {...state, isLoading: false, isError: true }
        case GET_SUCCESS:
            return {...state, isLoading: false, isError: false, menus: payload}
        default:
            return state;
    }
}