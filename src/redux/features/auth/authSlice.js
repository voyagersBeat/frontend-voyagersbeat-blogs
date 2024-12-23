import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
const initialState = {
  user: null, // Start with no user logged in
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Set the user in Redux state
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    // Clear the user during logout
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
