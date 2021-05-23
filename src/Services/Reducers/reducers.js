import { ADD_TO_CART } from "../constants";

const initialState = {
  cartData: [], //this blank array will collect all the items data coming from action and send to store.
};

export default function cartItems(state = [], action) {
  // here switch case will tell the store which action has been called add/remove data/item from the store
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn("reduce", action)
      return [...state, { cartData: action.data }];

    default:
      return state; //this state is not related to components state. it only tells us about the cartItem array.
  }
}
