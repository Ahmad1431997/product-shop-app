import instance from "./instance";
import { ADD_ITEM, CHECK_OUT, DELETE_ITEM } from "./types";

export const addItemToCart = (newProduct) => ({
  type: ADD_ITEM,
  payload: newProduct,
});
export const deleteFromCart = (productId) => ({
  type: DELETE_ITEM,
  payload: productId,
});
export const checkoutCart = (items) => async(dispatch)=>{
  const res = await instance.post("/checkout",items);
  console.log(items)
  dispatch({
    type: CHECK_OUT,
    payload:[]
  })
}