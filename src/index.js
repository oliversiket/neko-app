import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.min.css';
import App from './components/App/App';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
document.getElementById("root"))

