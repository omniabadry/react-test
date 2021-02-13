import * as types from "./types";
export default (state = {
    counter = 0
}, action) => {
    switch (action.type) {
        case TYPES_SET_COUNTER:
            return {
                ...state,
                counter: action.payload,
            };
        default:
            return state;
    }
};