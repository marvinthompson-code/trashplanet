import { createSlice } from "@reduxjs/toolkit";

export const feedModalSlice = createSlice({
  name: "feedModal",
  initialState: "",
  reducers: {
    setFeedModalImg: (state, action) => action.payload,
  },
});

export const { setFeedModalImg } = feedModalSlice.actions;
export default feedModalSlice.reducer;
