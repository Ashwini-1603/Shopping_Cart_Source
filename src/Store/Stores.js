import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice";
export const store = configureStore({
  reducer: {
    allCartData: CartSlice,
  }
})