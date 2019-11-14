import axios from "axios";
import {
  ADD_TO_MYCART,
  MYCART_ERROR,
  GET_MYCART_ITEMS,
  DELETE_ITEM,
  CHANGE_ITEM_QUANTITY
} from "./types";
import { setAlert } from "./alert";

// Add a item to MyCart
export const addToCart = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("/api/myCart/add", body, config);

    dispatch({
      type: ADD_TO_MYCART,
      payload: res.data
    });

    dispatch(setAlert("Item is added to your Cart", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    } else {
      dispatch(
        setAlert("You must login first to add items in your Cart", "danger")
      );
    }

    dispatch({
      type: MYCART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all items in MyCart
export const getMyCartItems = () => async dispatch => {
  try {
    const res = await axios.get("/api/myCart/me");

    dispatch({
      type: GET_MYCART_ITEMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MYCART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete a item in MyCart
export const deleteItem = itemId => async dispatch => {
  try {
    const res = await axios.delete(`/api/myCart/item/${itemId}`);

    dispatch({
      type: DELETE_ITEM,
      payload: res.data
    });

    dispatch(setAlert("Item is successfully removed from your cart", "success"));
  } catch (err) {
    dispatch({
      type: MYCART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Change quantity of a item in MyCart
export const changeItemQuantity = ({ itemId, quantity })=> async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const editData = {
    quantity
  }

  const body = JSON.stringify(editData);

  try {
    const res = await axios.put(`/api/myCart/item/${itemId}`, body, config);

    dispatch({
      type: CHANGE_ITEM_QUANTITY,
      payload: res.data
    });

    dispatch(setAlert("Item quantity is successfully changed for the item", "success"));
  } catch (err) {
    dispatch({
      type: MYCART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}