import * as types from "../types/types";

export const setCounter = (payload) => ({
    type: types.SET_COUNTER,
    payload: payload,
});