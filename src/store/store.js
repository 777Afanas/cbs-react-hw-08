import { configureStore } from "@reduxjs/toolkit";
import counterReduser   from "./counterSlice";


export const store = configureStore({
    reducer: {
        counterValue: counterReduser,
    }
})