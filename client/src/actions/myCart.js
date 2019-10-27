import axios from "axios";
import { ADD_TO_MYCART, MYCART_ERROR, GET_MYCART_ITEMS } from "./types";
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
    }

    dispatch({
      type: MYCART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });

    dispatch(
      setAlert("You must login first to add items in your Cart", "danger")
    );
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
