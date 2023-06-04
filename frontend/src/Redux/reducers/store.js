import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
const store = configureStore({
    auth:authReducer
})
export default store