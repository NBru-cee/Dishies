import { createSlice } from "@reduxjs/toolkit";

const items =
      localStorage.getItem("cartItems") !== null
            ? JSON.parse(localStorage.getItem("cartItems"))
            : 0;

const totalAmount =
      localStorage.getItem("totalAmount") !== null
            ? JSON.parse(localStorage.getItem("totalAmount"))
            : 0;
const totalQuantity =
      localStorage.getItem("totalQuantity") !== null
            ? JSON.parse(localStorage.getItem("totalQuantity"))
            : 0;

const setItemFunction = (item, totalQuantity, totalAmount) => {
      localStorage.setItem("cartItems", JSON.stringify(item));
      localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
      localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
      cartItems: items,
      totalAmount: totalAmount,
      totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            //add item to cart
            addItem(state, action) {
                  const newItem = action.payload;
                  const existingItem = state.cartItems.find(
                        (item) => item.id === newItem.id
                  );
                  state.totalQuantity++;
                  if (!existingItem) {
                        state.cartItems.unshift({
                              id: newItem.id,
                              title: newItem.title,
                              price: newItem.price,
                              quantity: 1,
                              totalPrice: newItem.price,
                              image01: newItem.image01,
                        });
                  } else {
                        existingItem.quantity++;
                        existingItem.totalPrice =
                              existingItem.totalPrice + newItem.price;
                  }
                  state.totalAmount = state.cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                  );
                  setItemFunction(
                        state.cartItems.map((item) => item),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
            //remove item from cart
            removeItem(state, action) {
                  const id = action.payload;
                  const existItem = state.cartItems.find(
                        (item) => item.id === id
                  );
                  state.totalQuantity--;
                  if (existItem.quantity === 1) {
                        state.cartItems = state.cartItems.filter(
                              (item) => item.id !== id
                        );
                  } else {
                        existItem.quantity--;
                        existItem.totalPrice =
                              existItem.totalPrice - existItem.price;
                  }
                  state.totalAmount = state.cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                  );
                  setItemFunction(
                        state.cartItems.map((item) => item),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
            //delete item from cart
            deletItem(state, action) {
                  const id = action.payload;
                  const existing = state.cartItems.find(
                        (item) => item.id === id
                  );
                  if (existing) {
                        state.cartItems = state.cartItems.filter(
                              (item) => item.id !== id
                        );
                  }
                  state.totalQuantity = state.totalQuantity - existing.quantity;
                  state.totalAmount = state.cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                  );
                  setItemFunction(
                        state.cartItems.map((item) => item),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
      },
});

export const selectAllItems = (state) => state.cartItems;
export const cartTotalQuantity = (state) => state.totalQuantity;
export const cartTotalAmount = (state) => state.totalAmount;
export default cartSlice.reducer;
