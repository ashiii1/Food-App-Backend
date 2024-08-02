import { GETCART_REJ, GETCART_REQ, GETCART_SUCCESS, REMOVE_DISH }  from "./actionTypes"



const initialState = {
    cartItems: [],
    isLoading: false,
    isError: false
}

export const cartReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case GETCART_REQ:
            return {...state, isLoading: true}
        case GETCART_SUCCESS:
            return {...state, isLoading: false, cartItems: payload}
        case GETCART_REJ:
            return {...state, isLoading: false, isError: true}
        case REMOVE_DISH:
            return {...state, cartItems: state.cartItems.filter(dish=> dish._id !== payload) }
        default:
            return state;
    }
}

 // setCartItems((prevCartItems) =>
                // prevCartItems.filter((item) => item.id !== dishId)
                // );