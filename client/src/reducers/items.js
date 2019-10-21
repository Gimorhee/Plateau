import {
  GET_ALL_ITEMS,
  ITEMS_ERROR,
  GET_TYPE_ITEMS,
  GET_ITEM
} from "../actions/types";

const initialState = {
  item: null,
  items: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_ITEMS:
    case GET_TYPE_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case GET_ITEM:
      return {
        ...state,
        item: payload,
        loading: false
      }
    case ITEMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
