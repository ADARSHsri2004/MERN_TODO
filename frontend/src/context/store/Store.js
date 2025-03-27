import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../AuthSlices"
const store = configureStore({
    reducer: {
        auth: authReducer // Add it to the store
    }
})
export default store;