import BACKEND_API from "../../API/api";
import { GET_REJ, GET_REQ, GET_SUCCESS } from "./actionTypes"
import axios from "axios";


// Get MenuList Data
export const getMenus = (categoryParam) => (dispatch)=>{
    dispatch({type: GET_REQ});
    axios
    .get(`${BACKEND_API}/menu`, {
      params: { category: categoryParam },
    })
          .then((res) => {
            dispatch({type: GET_SUCCESS, payload: res.data.menuList})
          })
          .catch((error) => {
            console.log("Error while Getting the MenuList:",error.message);
            dispatch({type: GET_REJ})
          });
}