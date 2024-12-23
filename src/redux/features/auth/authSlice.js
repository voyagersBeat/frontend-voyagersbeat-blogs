import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch current user
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://voyagers-backend.onrender.com/api/auth/current-user",
        { withCredentials: true } // Send session cookies
      );
      console.log("User data fetched successfully:", response.data.user); // Debugging log
      return response.data.user;
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response || error.message
      ); // Debugging log
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load user"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
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
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set user data
        state.error = null; // Clear previous errors
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null; // Clear user data on error
        state.error = action.payload; // Set the error message
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
