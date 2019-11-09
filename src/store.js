import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import initial from "./data/initial"
import reducer from "./data/reducer"

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initial,
    composeEnhancers(persistState())
    // composeEnhancers(persistState())
);

export default store