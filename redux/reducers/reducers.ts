import { initialLoginState } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialLoginState = {
  isLoggedIn: false,
};

const rootReducers = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginState: (state: any) => {
      return state;
    },
    loginUserSuccess: (state) => {
      console.log(">> SUCCESSFULLY LOGGED IN");
      state.isLoggedIn = true;
    },
    loginUserFailed: (state) => {
      console.log("LOG IN FAILED");
      state.isLoggedIn = false;
    },
  },
});

export const { getLoginState, loginUserSuccess, loginUserFailed } =
  rootReducers.actions;
export default rootReducers.reducer;
