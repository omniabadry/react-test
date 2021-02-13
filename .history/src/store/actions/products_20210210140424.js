import * as types from "../types/types";

export const setProduct = (payload) => ({
    type: types.SET_PRODUCTS,
    payload: payload,
});
