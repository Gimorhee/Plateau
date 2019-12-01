import {
    GET_PAYMENT_INFO,
    PAYMENT_ERROR,
    ADD_OR_UPDATE_PAYMENT_INFO
} from "../actions/types";

const intialState = {
    info: null,
    edit: false
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PAYMENT_INFO:
            return {
                ...state,
                info: payload
            }
        case ADD_OR_UPDATE_PAYMENT_INFO:
            return {
                ...state,
                info: payload
            }
        case PAYMENT_ERROR:
            return {
                ...state
            }
        default:
            return state;
    }
}