import axios from "axios";
import {
    GET_DELIVERY_INFO,
    DELIVERY_ERROR
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