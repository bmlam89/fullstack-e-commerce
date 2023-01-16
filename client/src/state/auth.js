import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginOpen: false,
  user: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoginOpen: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    setUser: (state, action) => {
      state.user = !state.user;
    }
  }
});

export const {
  setIsLoginOpen,
  setUser
} = authSlice.actions;

export default authSlice.reducer