import { combineReducers } from "redux";
import cartItems from "./reducers";
/* in this index.js file we will combine all the reducers being used inside our app */


export default combineReducers({
  cartItems,
});
