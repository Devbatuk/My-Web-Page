import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import theme from "./theme";

const store = configureStore({
    reducer:{
        auth,
        theme
    }
})

export default store