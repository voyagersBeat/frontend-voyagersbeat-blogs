import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch current user
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://backend-voyagersbeat-blogs.onrender.com/api/auth/current-user",
        { withCredentials: true } // Send session cookies
      );
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to load user");
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
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set user data
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
