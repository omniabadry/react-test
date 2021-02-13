import * as types from "./types";

export const setCounter = (payload) => ({
    type: types.SET_COUNTER,
    payload: payload,
});