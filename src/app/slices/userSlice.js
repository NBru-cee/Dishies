import { createSlice } from "@reduxjs/toolkit";

const credentials =
      localStorage.getItem("credentials") !== null
            ? localStorage.getItem("credentials")
            : [];

const setUserFunction = (credential) => {
      localStorage.setItem("credentials", JSON.stringify(credential));
};

const initialState = {
      credentials: credentials,
      isLoggedIn: true,
};

const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            saveCredentials(state, action) {
                  setUserFunction(
                        state.credentials.map((credential) => credential)
                  );
            },
            loggin(state) {
                  state.isLoggedIn = true;
                  setUserFunction(
                        state.credentials.map((credential) => credential)
                  );
            },
            logout(state) {
                  state.isLoggedIn = false;
                  setUserFunction(
                        state.credentials.map((credential) => credential)
                  );
            },
      },
});

export const userActions = userSlice.actions;
export const userCredentials = (state) => state.user.credentials;
export default userSlice.reducer;
