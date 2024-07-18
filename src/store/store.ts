import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from './cart-slice'

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

 
export type AppDispatch = typeof store.dispatch;  // This type is to create a custom useDispatch

export type RootState = ReturnType<typeof store.getState>  // This is to create a custom useSelectore. Here store.getState is a function so to get the value return by that fucntion we have to use ReturnType.
export default store;