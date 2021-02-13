import { createStore , applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import reducer from "./combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;