import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_NOT_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
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

    dispatch(loadUser());
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

// Load Authorized User Info
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

// Login User
export const login = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout User
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};