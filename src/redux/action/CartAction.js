import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT, ADD_DATA } from "./CartActionTypes";

export const addToCart = (item) => {
    return ({
        type: ADD_TO_CART,
        payload: item,
    })
}

export const removeFromCart = (item) => {
    return ({
        type: REMOVE_FROM_CART,
        payload: item,
    })
}
export const checkout = () => {
    return({
        type: CHECKOUT
    })
    
  };


  export const addData = (data) => {
    return({
        type:ADD_DATA,
        payload: data
    })
  }