import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const storesSlice = createSlice({
  name: "stores",
  initialState: [],
  reducers: {
    setStores: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});
export const { setStores } = storesSlice.actions;
export default storesSlice.reducer;
