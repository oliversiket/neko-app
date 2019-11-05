import { createStore } from "redux";
import initial from "./data/initial"
import reducer from "./data/reducer"

const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store