import axios from "axios";
import {
    GET_DELIVERY_INFO,
    DELIVERY_ERROR,
    ADD_OR_UPDATE_DELIVERY_INFO
} from "./types";
import { setAlert } from "./alert";

// Get a customer delivery info
export const getDeliveryInfo = () => async dispatch => {
    try {
        const res = await axios.get("/api/delivery/me");

        dispatch({
            type: GET_DELIVERY_INFO,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DELIVERY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add or update delivery info
export const addOrUpdateDeliveryInfo = formData => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const body = JSON.stringify(formData);

        const res = await axios.post("/api/delivery/add", body, config);

        dispatch({
            type: ADD_OR_UPDATE_DELIVERY_INFO,
            payload: res.data
        });

        dispatch(setAlert("Delivery info successfully added/updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        
        dispatch({
            type: DELIVERY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}