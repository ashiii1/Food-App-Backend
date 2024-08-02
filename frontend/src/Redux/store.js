import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { menuReducer } from "./GetMenu/menuReducer";
import {thunk} from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";


const rootReducer= combineReducers({
    menuReducer,
    cartReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
