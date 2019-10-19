import { GET_ALL_ITEMS, ITEMS_ERROR, GET_TYPE_ITEMS } from "./types";
import axios from "axios";

// Get all items
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get("/api/items");

    dispatch({
      type: GET_ALL_ITEMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get certain type items
export const getTypeItems = type => async dispatch => {
  try {
    const res = await axios.get(`/api/items/${type}`);

    dispatch({
      type: GET_TYPE_ITEMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}