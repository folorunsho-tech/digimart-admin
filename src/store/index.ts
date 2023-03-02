import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authAPI } from "./services/auth";
import { productsAPI } from "./services/products";
import { userAPI } from "./services/user";
export const store = configureStore({
  reducer: combineReducers({
    // Add your reducers here
    [authAPI.reducerPath]: authAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
