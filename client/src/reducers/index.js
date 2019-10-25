import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import items from "./items";
import myCart from "./myCart";

export default combineReducers({
    alert,
    auth,
    items,
    myCart
});