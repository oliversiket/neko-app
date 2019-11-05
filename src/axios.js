import axios from "axios";

export default axios.create({

    baseURL: "https://api.thecatapi.com/v1",

    params: {
        'x-api-key': "619b680c-8c53-4ea6-9fe3-2de22e801a71",
    },

    headers: {
        Accept: "application/json",
        'x-api-key': "619b680c-8c53-4ea6-9fe3-2de22e801a71",
}, });