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

const setItems = (products, totalAmount, totalQuantity) => {
      localStorage.setItem("cartProducts", JSON.stringify(products));
      localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
      localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
      products: products,
      totalAmount: totalAmount,
      totalQuantity: totalQuantity,
};

const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addProduct(state, action) {
                  const newProduct = action.payload;
                  const existingProduct = state.products.find(
                        (item) => item.id === newProduct.id
                  );
                  state.totalQuantity++;
                  if (!existingProduct) {
                        state.products.unshift({
                              id: newProduct.id,
                              title: newProduct.title,
                              quantity: 1,
                              image01: newProduct.image01,
                              desc: newProduct.desc,
                        });
                  }
            },
      },
});

export const selectedProducts = (state) => state.products;
export const cartActions = cartSlice.actions;
export default cartSlice;
