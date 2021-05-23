import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
/* this action.js will take data from react and pass that to redux store so that store will perform accordingly. e.g.:- when user will click to add button, then store will add data and vise versa */
export const AddToCart = (data) => {
  // console.log("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const RemoveToCart = () => {
  console.log("action");
  return {
    type: REMOVE_TO_CART,
    
  };
};
 