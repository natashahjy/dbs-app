import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
  name: "userState",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = userState.actions;

export default userState.reducer;