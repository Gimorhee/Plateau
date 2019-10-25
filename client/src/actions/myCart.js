import axios from "axios";
import { ADD_TO_MYCART, MYCART_ERROR } from "./types";
import { setAlert } from "./alert";

// Add a item to MyCart
export const AddToCart = formData => async dispatch => {
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
        })
    }
}
