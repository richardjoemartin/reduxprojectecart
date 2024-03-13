import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const store=configureStore({
    reducer:{
        wish:wishlistSlice, //key name can be anything 
        cartReducer:cartSlice
    }
})
export default store