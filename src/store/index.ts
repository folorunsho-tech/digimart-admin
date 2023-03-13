import { storesSlice } from "./slices/stores";
import { storeAPI } from "./services/store";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authAPI } from "./services/auth";
import { productsAPI } from "./services/products";
import { userSlice } from "./slices/user";
export const store = configureStore({
  reducer: combineReducers({
    // Add your reducers here
    [authAPI.reducerPath]: authAPI.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
    [storeAPI.reducerPath]: storeAPI.reducer,
    user: userSlice.reducer,
    stores: storesSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authAPI.middleware)
      .concat(productsAPI.middleware)
      .concat(storeAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
