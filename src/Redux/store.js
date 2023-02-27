import { configureStore } from "@reduxjs/toolkit";
import generalStateSlice from "./generalStateSlice"

export const store = configureStore ({
    reducer:{
        generalState:generalStateSlice,
    },

})

