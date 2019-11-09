import {
  ADD_TO_MYCART,
  MYCART_ERROR,
  GET_MYCART_ITEMS,
  DELETE_ITEM
} from "../actions/types";

const initialState = {
  items: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_MYCART:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false
      };
    case GET_MYCART_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case MYCART_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: payload,
        loading: false
      }
    default:
      return state;
  }
}
