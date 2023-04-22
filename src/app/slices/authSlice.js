import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
     name: "auth",
     initialState: {
          isLoggedIn: false,
     },
     reducers: {
          logout(state) {
               state.isLoggedIn = false;
          },
          login(state) {
               state.isLoggedIn = true;
          },
     },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
