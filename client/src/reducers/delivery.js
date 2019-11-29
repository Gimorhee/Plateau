import {
    GET_DELIVERY_INFO,
    DELIVERY_ERROR,
    ADD_OR_UPDATE_DELIVERY_INFO
} from "../actions/types";

const initialState = {
    info: null,
    edit: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DELIVERY_INFO:
            return {
                ...state,
                info: payload
            }
        case ADD_OR_UPDATE_DELIVERY_INFO:
            return {
                ...state,
                info: payload
            }
        case DELIVERY_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}