import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../Feature/cardSlice';


export const store = configureStore({
   reducer:cardReducer,
})

