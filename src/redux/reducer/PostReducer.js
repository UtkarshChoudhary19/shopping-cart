import {ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT, ADD_DATA } from '../action/CartActionTypes';

const initialState = {
    
    data: [],
    cart:[]
  
}


const Postreducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TO_CART:
        
        if (state.cart.some((item) => item.id === action.payload.id)) {
          alert("items alerdy in cart")
          return state;
        }
        return { ...state, cart: [...state.cart, action.payload] };
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };


        case ADD_DATA:
        return {...state, data: action.payload};
  
      case CHECKOUT:
        return { ...state, cart: [] };
  
      default:
        return state;
    }
  };

export default Postreducer;