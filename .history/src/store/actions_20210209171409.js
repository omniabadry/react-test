import * as types from "./types";

export const setCounter = (payload) => ({
    types: types.TYPES_SET_COUNTER,
    payload: payload,
});