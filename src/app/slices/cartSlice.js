import { createSlice } from "@reduxjs/toolkit";

const products =
      localStorage.getItem("cartProducts") !== null
            ? JSON.parse(localStorage.getItem("cartProducts"))
            : [];

const totalQuantity =
      localStorage.getItem("totalQuantity") !== null
            ? JSON.parse(localStorage.getItem("totalQuantity"))
            : 0;

const totalAmount =
      localStorage.getItem("totalAmount") !== null
            ? JSON.parse(localStorage.getItem("totalAmount"))
            : 0;

const setProductFunction = (products, totalAmount, totalQuantity) => {
      localStorage.setItem("cartProducts", JSON.stringify(products));
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
                              quantity: 1,
                              image01: newProduct.image01,
                              price: newProduct.price,
                              totalPrice: newProduct.price,
                        });
                  } else {
                        existingProduct.totalQuantity++;
                        existingProduct.totalPrice =
                              existingProduct.totalPrice + newProduct.price;
                  }
                  state.totalAmount = state.cartProducts.reduce(
                        (total, product) =>
                              total + product.price * product.quantity,
                        0
                  );
                  setProductFunction(
                        state.cartProducts.map((product) => product),
                        state.totalAmount,
                        state.totalQuantity
                  );
            },
      },
});

export const selectedProducts = (state) => state.cartProducts;
export const cartTotalAmount = (state) => state.totalAmount;
export const cartTotalQuantity = (state) => state.totalQuantity;
export const cartActions = cartSlice.actions;
export default cartSlice;
