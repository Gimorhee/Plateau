import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = (message, type) => dispatch => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      type,
      id
    }
  });

  setTimeout(() => {
    dispatch({
        type: REMOVE_ALERT,
        payload: id
    })
  }, 2500);
};
