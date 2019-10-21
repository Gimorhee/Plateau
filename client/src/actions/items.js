import { GET_ALL_ITEMS, ITEMS_ERROR, GET_TYPE_ITEMS, GET_ITEM } from "./types";
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
};

// Get a specific Item by Id
export const getItem = id => async dispatch => {
  try {
    const res = await axios.get(`/api/items/${id}`);

    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
