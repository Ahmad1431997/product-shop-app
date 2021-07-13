import { ADD_ITEM, CHECK_OUT, DELETE_ITEM } from "./types";

export const addItemToCart = (newProduct) => ({
  type: ADD_ITEM,
  payload: newProduct,
});
export const deleteFromCart = (productId) => ({
  type: DELETE_ITEM,
  payload: productId,
});
export const checkoutCart = () => ({
  type: CHECK_OUT,
});