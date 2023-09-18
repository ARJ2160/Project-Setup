import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const rootReducers = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
  },
});

export const {  } = rootReducers.actions;
export default rootReducers.reducer;
