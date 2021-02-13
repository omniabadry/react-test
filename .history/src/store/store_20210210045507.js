import { createStore } from "redux";
import reducer from "./combineReducer";
const Tools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, Tools);

export default store;