import { combineReducers } from "redux";
{
  /* in this index.js file we will combine all the reducers being used inside our app */
}
import cartItems from "./reducers";

export default combineReducers({
  cartItems,
});
