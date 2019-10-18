import { GET_ALL_ITEMS, ITEMS_ERROR } from "./types";
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
