import { COMPLETE_ORDER, ORDER_ERROR } from "../actions/types";

const initialState = {
  orders: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COMPLETE_ORDER:
      return {
        ...state,
        orders: [payload, ...state.orders],
        loading: false
      };
    case ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
