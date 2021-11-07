import { UPDATE_CART, ADD_TO_CART, REMOVE_CART } from "../actions/types";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.data,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat([action.data]),
      };

    case REMOVE_CART:
      console.log(action);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
