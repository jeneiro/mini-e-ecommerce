import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface cartItem {
  itemName: string;
  amount: number;
}

interface cartState {
  items: cartItem[];
  totalAmount: number;
  totalItems: number;
}
const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<cartItem>) => {
      state.items.push(action.payload);
      state.totalAmount = state.totalAmount + action.payload.amount;
      state.totalItems++;
    },
    removeItem: (state, action: PayloadAction<cartItem>) => {
      let index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
export const cartList = (state: RootState) => state.cart.items;
export const cartTotalItems = (state: RootState) => state.cart.totalItems;
export const cartTotalAmount = (state: RootState) => state.cart.totalAmount;
