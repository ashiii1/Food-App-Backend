import axios from "axios";
import { GETCART_REJ, GETCART_REQ, GETCART_SUCCESS, REMOVE_DISH }  from "./actionTypes"
import BACKEND_API from "../../API/api";

export const getCartItem = (user) => (dispatch) =>{
 
    if(!user){
      console.log("User needs to Log In to show cart")
      return
    }
   
    dispatch({type: GETCART_REQ});
            axios
          .get( `${BACKEND_API}/cart`,{
            headers: {
              "Authorization" : `Bearer ${user?.email}`
            }
          })
          .then((response) => {
            dispatch({type:GETCART_SUCCESS, payload: response.data})
          })
          .catch((error) => {
            console.log("Error while Getting the CartItems:",error.message);
                dispatch({type: GETCART_REJ})
          });
}

export const removeFromCart= (dishId, user) => (dispatch) =>{
           axios
            .delete(`${BACKEND_API}/cart/${dishId}`,{
                headers: {
                        "Authorization" : `Bearer ${user?.email}`
                        }
            })
            .then((response) => {
                // Filter out the deleted item from the cartItems state
                if(response.ok){
                console.log("Item Deleted")
                }
                dispatch({type: REMOVE_DISH, payload:dishId})
               
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
}