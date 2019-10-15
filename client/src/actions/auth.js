import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_NOT_LOADED
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

// Register User
export const register = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const loadUser = () => async dispatch => {
    try {
        if(localStorage.token) {
            setAuthToken(localStorage.token);
        }

        const res = await axios.get("/api/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: USER_NOT_LOADED
        })
    }
}