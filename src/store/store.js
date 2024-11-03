import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./counterSlice";
import notesReduser from "./notesSlice.js";


export const store = configureStore({
    reducer: {
        counterValue: counterReduser,
        notesValue: notesReduser,
    }
})