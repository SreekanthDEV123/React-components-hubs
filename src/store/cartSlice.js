import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["aa"],
    items1: ["aa"],
  },
  reducers: {
    removeFromCart: (state, action) => {
      console.log("just");
    },
    addToCart: (state, action) => {
      console.log(action, "jj");
      state.items.push(action.payload.details);
      console.log(state, "ll");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
