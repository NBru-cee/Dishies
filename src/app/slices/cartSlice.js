import { createSlice } from "@reduxjs/toolkit";

const products =
      localStorage.getItem("cartProducts") !== null
            ? JSON.parse(localStorage.getItem("cartProducts"))
            : [];

const totalAmount =
      localStorage.getItem("totalAmount") !== null
            ? JSON.parse(localStorage.getItem("totalAmount"))
            : 0;
const totalQuantity =
      localStorage.getItem("totalQuantity") !== null
            ? JSON.parse(localStorage.getItem("totalQuantity"))
            : 0;

const setItemFunction = (product, totalQuantity, totalAmount) => {
      localStorage.setItem("cartProducts", JSON.stringify(product));
      localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
      localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
      cartProducts: products,
      totalAmount: totalAmount,
      totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            //add item to cart
            addProduct(state, action) {
                  const newProduct = action.payload;
                  const existingProduct = state.cartProducts.find(
                        (item) => item.id === newProduct.id
                  );
                  state.totalQuantity++;
                  if (!existingProduct) {
                        state.cartProducts.unshift({
                              id: newProduct.id,
                              title: newProduct.title,
                              price: newProduct.price,
                              quantity: 1,
                              totalPrice: newProduct.price,
                              image01: newProduct.image01,
                        });
                  } else {
                        existingProduct.quantity++;
                        existingProduct.totalPrice =
                              Number(existingProduct.totalPrice) +
                              Number(newProduct.price);
                  }
                  state.totalAmount = state.cartProducts.reduce(
                        (total, item) =>
                              total +
                              Number(item.price) * Number(item.quantity),
                        0
                  );
                  setItemFunction(
                        state.cartProducts.map((product) => product),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
            //remove item from cart
            removeItem(state, action) {
                  const id = action.payload;
                  const existingProduct = state.cartProducts.find(
                        (item) => item.id === id
                  );
                  state.totalQuantity--;
                  if (existingProduct.quantity === 1) {
                        state.cartProducts = state.cartProducts.filter(
                              (item) => item.id !== id
                        );
                  } else {
                        existingProduct.quantity--;
                        existingProduct.totalPrice =
                              Number(existingProduct.totalPrice) -
                              Number(existingProduct.price);
                  }
                  state.totalAmount = state.cartProducts.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                  );
                  setItemFunction(
                        state.cartProducts.map((item) => item),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
            //delete item from cart
            deletItem(state, action) {
                  const id = action.payload;
                  const existingProduct = state.cartProducts.find(
                        (item) => item.id === id
                  );
                  if (existingProduct) {
                        state.cartProducts = state.cartProducts.filter(
                              (item) => item.id !== id
                        );
                  }
                  state.totalQuantity =
                        state.totalQuantity - Number(existingProduct.quantity);
                  state.totalAmount = state.cartProducts.reduce(
                        (total, item) =>
                              total +
                              Number(item.price) * Number(item.quantity),
                        0
                  );
                  setItemFunction(
                        state.cartProducts.map((item) => item),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
      },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
export const allSelectedProducts = (state) => state.cart.cartProducts;
export const cartTotalAmount = (state) => state.cart.totalAmount;
export const cartTotalQuantity = (state) => state.cart.totalQuantity;
