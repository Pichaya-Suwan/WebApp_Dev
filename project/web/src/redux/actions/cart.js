import { UPDATE_CART, ADD_TO_CART, REMOVE_CART } from "./types";

export const updateCart = (data) => ({
  type: UPDATE_CART,
  data: data,
});

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  data: data,
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  id: id,
});
