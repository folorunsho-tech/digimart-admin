import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../../libs/cookies";

export const userSlice = createSlice({
  name: "user",
  initialState: getCookie("digimart_user"),
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
      setCookie("digimart_user", JSON.stringify(state), 15);
      console.log(state);
    },
    removeUser: (state) => {
      state = {};
      removeCookie("digimart_user");
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
