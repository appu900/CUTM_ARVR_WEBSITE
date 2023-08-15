import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function (state) {
      state.userLoggedin = true;
    },
    logout: function (state) {
      state.userLoggedin = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
