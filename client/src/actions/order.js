import axios from "axios";
import { COMPLETE_ORDER, ORDER_ERROR } from "./types";
import { setAlert } from "./alert";

// Complete the order
export const completeOrder = orderData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify(orderData);

    const res = await axios.post("/api/order/complete", body, config);

    dispatch({
      type: COMPLETE_ORDER,
      payload: res.data
    });

    dispatch(setAlert("Your order has been successfully purchased", "success"));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR
    });
  }
};
