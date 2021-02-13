import { combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";
import productReducer from "./productReducer";

export default combineReducers({
    counterReducer,
    productReducer
})