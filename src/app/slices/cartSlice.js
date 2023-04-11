import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products: [],
      totalAmount: 0,
      totalQuantity: 0,
};

const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addOne(state) {
                  state.totalAmount += 1;
            },
      },
});

export const selectedProducts = (state) => state.products;
export const cartActions = cartSlice.actions;
export default cartSlice;
