import * as types from "../types/products";
export default (state = [], action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};