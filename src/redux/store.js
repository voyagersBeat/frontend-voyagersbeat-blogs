import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blog/blogApi.js";
import authApi from "./features/auth/AuthApi.js";
import authReducer from "./features/auth/authSlice.js";
import commentApi from "./features/comment/commentApi.js";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      authApi.middleware,
      commentApi.middleware
    ),
});
