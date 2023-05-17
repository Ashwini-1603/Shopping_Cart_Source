import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";
const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "allCartData",
  initialState,
  reducers: {
    //this function is used to add the items to cart page
    addToCart: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.cart.find(item => item.id === newItemId);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(action.payload);
      
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { quantity } = cartItem;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalQuantity: 0,
        }
      );
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity++;
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          item.quantity--;
        }
        return item;
      }).filter(item => item.quantity !== 0);
    },
  },
});
export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
