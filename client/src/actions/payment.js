import axios from "axios";
import {
    GET_PAYMENT_INFO,
    PAYMENT_ERROR,
    ADD_OR_UPDATE_PAYMENT_INFO
} from "./types";
import { setAlert } from "./alert";

// Get a customer payment info
export const getPaymentInfo = () => async dispatch => {
    try {
        const res = await axios.get("/api/payment/me");

        dispatch({
            type: GET_PAYMENT_INFO,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// ADD or update payment info
export const addOrUpdatePaymentInfo = formData => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const body = JSON.stringify(formData);

        const res = await axios.post("/api/payment/add", body, config);

        dispatch({
            type: ADD_OR_UPDATE_PAYMENT_INFO,
            dispatch: res.data
        });

        dispatch(setAlert("Payment info successfully added/updated", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
        
        dispatch({
            type: PAYMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}