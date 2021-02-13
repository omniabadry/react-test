import * as types from "./types";

export const setCounter = (payload) => ({
    type: types.TYPES_SET_COUNTER,
    payload: payload,
});