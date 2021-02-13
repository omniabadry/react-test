import { createStore , applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import reducer from "./combineReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// const devTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;